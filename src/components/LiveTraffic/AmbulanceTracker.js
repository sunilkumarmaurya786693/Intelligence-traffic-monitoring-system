import React from 'react';

export default class AmbulanceTracker extends React.Component {
  render() {
    return (
      <div>
        <iframe src={'/ambulance/index.html'} style={styles.map} />
      </div>
    );
  }
}

const styles = {
  map: {
    width: '100%',
    height: '82vh',
    border: 'none'
  }
};
