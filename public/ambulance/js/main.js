var routeDistance = 0; //value will be returned in meters from origin to destination (used to make sure the marker meter does not go past total distance)
var coordinates; //the coordinates of each step of the route
var distances; //the distances from point A to point B for each step in the route
var finalLat, finalLong;
function calcRoute() {
	var request = {
		origin: originPoint,
		destination: destinationPoint,
		travelMode: 'DRIVING'
	};
	directionsService.route(request, function(result, status) { //a call to the Google Maps API to get the steps
		if (status == 'OK') {
			if (result.routes.length > 0) { //Google Maps may return multiple routes
				routeDistance = result.routes[0].legs[0].distance.value;
				if (result.routes[0].overview_path.length > 0) {
					coordinates = []
					distances = []
					for (var i=0; i<result.routes[0].overview_path.length; i++) { //navigate through each step
						var startLng = result.routes[0].overview_path[i].lng();
						var startLat = result.routes[0].overview_path[i].lat();
						var startLngLat = [startLng, startLat];
						coordinates.push(startLngLat);
						if (i!=result.routes[0].overview_path.length-1) { //not the last step, so add distance between this step and next step
							var nextLng = result.routes[0].overview_path[i+1].lng();
							var nextLat = result.routes[0].overview_path[i+1].lat();
							var fromLoc = new google.maps.LatLng(startLat, startLng); //the from point
							var toLoc = new google.maps.LatLng(nextLat, nextLng); //the two point
							var distanceBetween = google.maps.geometry.spherical.computeDistanceBetween(fromLoc, toLoc); //the distances between this point and the next point
							distances.push(distanceBetween); //track the distances for the simulation
							// console.log("Asdasd" + distanceBetween)
						}
					}
					showRoute(coordinates); //display the route
					showUserOptionsBoxDiv("simulate-container"); //show the next user options (to simulate the route)
				}
			}
		}
	});
}
function coordinatesForMeter(meter) { //get the geo location for a specific point of the marker on the route
	if (meter > distanceFromStartToEndOfCurrentSegment) { //if the meter is greater than the end of the current segment, move to the next segment
		currentSegment += 1;
		distanceFromStartToEndOfCurrentSegment += distances[currentSegment];
	}
	var segmentDistance = distances[currentSegment];
	var prevDistance = distanceFromStartToEndOfCurrentSegment - distances[currentSegment];
	var metersOnSegment = meter - prevDistance;
	//to find the point, get the percentage of the marker along the path and multiply that by the segment distance and add that to the lng/lat origins of the step
	var beginningLng = coordinates[currentSegment][0];
	var beginningLat = coordinates[currentSegment][1];
	var endingLng = coordinates[currentSegment+1][0]; //note: there will always be one more coordinates set than distances
	var endingLat = coordinates[currentSegment+1][1];
	var differenceLng = parseFloat(endingLng-beginningLng).toPrecision(12);
	var differenceLat = parseFloat(endingLat-beginningLat).toPrecision(12);
	var segmentPercentDone = metersOnSegment / segmentDistance;
	var newLng = parseFloat(beginningLng+(differenceLng*segmentPercentDone)).toPrecision(12);
	var newLat = parseFloat(beginningLat+(differenceLat*segmentPercentDone)).toPrecision(12);
	// console.log("Asd"+ newLng +" " +newLat);
	finalLong = newLng;
	finalLat = newLat;
	return [newLng, newLat];
}

function getCoord(){
	// console.log("Asd"+ finalLong +" " +finalLat);
		return [finalLong, finalLat];

}

function pointForCoordinates(coordinatesSegment) {
	return {
		"type": "Point",
		"coordinates": coordinatesSegment
	};
}
var kmph; //user entered value
var prevTimestamp = 0;
var pointCount = 0; //track points made to give all a unique id
var pointExists = false;
var animateRequest; //create a variable for the animation requests to cancel them when necessary
var currentSegment;
var distanceFromStartToEndOfCurrentSegment;
function simulateRoute() {
	kmph = document.getElementsByName("simulationSpeed")[0].value;
	if (kmph > 0) { //if the kmph is 0 the marker will stay in place
		removeMostRecentPoint(); //remove the point on board (if it is there) before adding a new point
		pointCount = pointCount + 1;
		map.addSource("point-" + pointCount, {
			"type": "geojson",
			"data": pointForCoordinates(0)
		});
		map.addLayer({
			"id": "point-" + pointCount,
			"source": "point-" + pointCount,
			"type": "circle",
			"paint": {
				"circle-radius": 11,
				"circle-color": "#2a4ff8"
			}
		});
		pointExists = true;
		currentSegment = 0; //reset the segment to 0 for each simulation
		distanceFromStartToEndOfCurrentSegment = distances[currentSegment]; //and the distance will be the end of the first segment (index 0)
		animateSimulation(0, 0);
	}
}
function animateSimulation(timestamp, meter) {
	var timeDiff = timestamp - prevTimestamp;
	prevTimestamp = timestamp;
	if (meter > routeDistance) { //if the meter surpasses the current point, remove it
		removeMostRecentPoint();
	} else if (timeDiff > 0 && timeDiff < 100) { //make sure the time diff is a reasonable amount to prevent glitches
		var mph = kmph*1000; //since the timestamp is in milliseconds, convert km per hour to meters per millisecond
		var mpms = mph/60/60/1000;
		var meterDiff = mpms*timeDiff; //the amount of meters the point has moved since the last update
		map.getSource("point-" + pointCount).setData(pointForCoordinates(coordinatesForMeter(meter))); //update the marker on the layer
		animateRequest = requestAnimationFrame(function(timestamp) {
			animateSimulation(timestamp, meter+meterDiff)
		});
	} else {
		animateRequest = requestAnimationFrame(function(timestamp) {
			animateSimulation(timestamp, meter)
		});
	}
}
var routeCount = 0;
var routeExists = true;
function removeMostRecentRoute() {
	if (routeCount > 0 && routeExists) { //check to make sure the route exists before trying to delete it
		map.removeLayer("route-" + (routeCount-1));
		routeExists = false; //a route has been removed and now does not exist
		if (animateRequest) {
			cancelAnimationFrame(animateRequest);
			animateRequest = null;
		}
	}
}
function removeMostRecentPoint() {
	if (pointCount > 0 && pointExists) { //check to make sure the point exists before trying to delete it
		map.removeLayer("point-" + pointCount);
		pointExists = false; //a point has been removed and now does not exist
	}
}
function showRoute(coordinates) {
	removeMostRecentRoute();
	map.addLayer({
		"id": "route-" + routeCount++,
		"type": "line",
		"source": {
			"type": "geojson",
			"data": {
				"type": "Feature",
				"properties": {},
				"geometry": {
					"type": "LineString",
					"coordinates": coordinates
				}
			}
		},
		"layout": {
			"line-join": "round",
			"line-cap": "round"
		},
		"paint": {
			"line-color": "#888",
			"line-width": 8
		}
	});
	routeExists = true; //a route now exists (it was just created)
}
var destinationSelectMode = false;
var originSelectMode = false;
function destinationSelect() { //the destination set button has been clicked
	if (destinationSelectMode == false) { //if not in select mode before, enter it
		destinationPoint = null; //value should be set to null while selecting (go button depends on seeing if values are set)
		hideUserOptionsBoxDiv("calc-route-btn"); //hide the go button while selecting
		hideUserOptionsBoxDiv("simulate-container");
		originSelectMode = false; //make sure you are not in origin and destination select mode
		destinationSelectMode = true;
		updateSetButton("destination-btn", "#9eb9de", "Set a destination");
		showMarkerHelper("Set the destination!", "#4c82cb", "D", "destination-marker");
	} else { //otherwise exit it
		destinationSelectMode = false;
		updateSetButton("destination-btn", "#6c6b6b", "Tap to set a destination");
		hideMarkerHelper(true, "destination-marker");
	}
}
function originSelect() {
	if (originSelectMode == false) { //if not in select mode before, enter it
		originPoint = null; //value should be set to null while selecting (go button depends on seeing if values are set)
		hideUserOptionsBoxDiv("calc-route-btn"); //hide the go button while selecting
		hideUserOptionsBoxDiv("simulate-container");
		destinationSelectMode = false; //make sure you are not in origin and destination select mode
		originSelectMode = true;
		updateSetButton("origin-btn", "#9eb9de", "Set an origin");
		showMarkerHelper("Set the origin!", "#4c82cb", "O", "origin-marker");
	} else { //otherwise exit it
		originSelectMode = false;
		updateSetButton("origin-btn", "#6c6b6b", "Tap to set an origin");
		hideMarkerHelper(true, "origin-marker");
	}
}
function updateSetButton(id, color, text) {
	var button = document.getElementById(id);
	button.style.backgroundColor = color;
	button.innerHTML = text;
}
function showMarkerHelper(text, color, symbol, markerId) {
	belowMouse = document.querySelectorAll(".below-mouse")[0];
	belowMouse.style.display = "block";
	belowMouse.style.left = "10px"; //start directly under "find route" div (it will move once mouse moves)
	belowMouse.style.top = "10px";
	belowMouse.innerHTML = text;
	marker = document.getElementById(markerId);
	marker.style.transform = "none";
	marker.style.display = "block";
	marker.style.left = "10px";
	marker.style.top = "10px";
	marker.style.boxShadow = "0px 5px 5px #6d6d6d";
	marker.style.backgroundColor = color;
	marker.innerHTML = symbol;
}
function hideMarkerHelper(hideMarker, markerId) { //parameter hideMarker determines whether to hide just the helper text or both the helper text and marker
	belowMouse = document.querySelectorAll(".below-mouse")[0];
	belowMouse.style.display = "none";
	if (hideMarker) {
		marker = document.getElementById(markerId);
		marker.style.display = "none";
	}
}
var originPoint;
var destinationPoint;
function placeMarker(e) { //save the marker on the board and save the long/lat of the clicked point
	if (inSelectMode()) {
		var markerId = "";
		if (destinationSelectMode) {
			destinationPoint = e.lngLat;
			destinationSelectMode = false;
			updateSetButton("destination-btn", "#4c82cb", "Destination set!");
			markerId = "destination-marker";
		} else if (originSelectMode) {
			originPoint = e.lngLat;
			originSelectMode = false;
			updateSetButton("origin-btn", "#4c82cb", "Origin set!");
			markerId = "origin-marker";
		}
		hideMarkerHelper(false, markerId);
		marker = document.getElementById(markerId);
		marker.style.top = "0";
		marker.style.left = "0";
		marker.style.boxShadow = "none"; //marker is placed so remove the shadow
		new mapboxgl.Marker(marker, {offset:[-12.5, -12.5]})
			.setLngLat(e.lngLat)
			.addTo(map);
		if (originPoint && destinationPoint) {
			showUserOptionsBoxDiv("calc-route-btn");
		}
	}
}
function inSelectMode() {
	return destinationSelectMode || originSelectMode; //if in destination or origin select mode this will be true
}
function showUserOptionsBoxDiv(id) {
	var div = document.getElementById(id);
	var divStyle = window.getComputedStyle(div);
	if (divStyle.display == "none") { //avoid setting the go button if it already exists
		div.style.display = "block";
		var userOptionsBoxDiv = document.querySelectorAll(".user-options-box")[0];
		userOptionsBoxDiv.style.height = userOptionsBoxDiv.clientHeight + div.clientHeight + 12 + "px";
	}
	if (id == "simulate-container") { //if showing the simulate container, must also unhide the simulate button
		var simBtn = document.getElementById("simulate-btn");
		simBtn.style.display = "block";
	}
}
function hideUserOptionsBoxDiv(id) {
	var div = document.getElementById(id);
	var divStyle = window.getComputedStyle(div);
	if (divStyle.display != "none") { //avoid hiding the go button if it is already hidden
		div.style.display = "none";
		var userOptionsBoxDiv = document.querySelectorAll(".user-options-box")[0];
		userOptionsBoxDiv.style.height = 136 + "px";
	}
}
var movementListener = function(e) { //have a marker and helper text follow the mouse if in select mode
	if (inSelectMode()) {
		belowMouse = document.querySelectorAll(".below-mouse")[0];
		var mouseX = e.pageX;
		var mouseY = e.pageY;
		var textWidth = belowMouse.clientWidth + 1;
		belowMouse.style.top = mouseY + 10 + "px";
		belowMouse.style.left = mouseX - (textWidth/2) + "px";
		var markerId = "";
		if (destinationSelectMode) {
			markerId = "destination-marker";
		} else {
			markerId = "origin-marker";
		}
		marker = document.getElementById(markerId);
		var markerWidth = 25;
		marker.style.top = mouseY - 20 + "px";
		marker.style.left = mouseX - (markerWidth/2) + "px";
	}
};
document.addEventListener('mousemove', movementListener, false);