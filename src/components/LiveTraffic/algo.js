const carf = total =>
  total < 20
    ? 20
    : total < 40
      ? 40
      : total < 60 ? 60 : total < 80 ? 80 : total < 100 ? 100 : 120;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function change() {
  const lanes = 4;
  let n = 4;
  while (1) {
    let burst_time = [2, 5, 16, 9];
    let totalNoOfCars = await burst_time.reduce((i, val) => val + i);
    let totalTime = await carf(totalNoOfCars);
    let laneTime = [];
    for (let i = 0; i < n; i++) {
      laneTime.push(Math.ceil(burst_time[i] / totalNoOfCars * totalTime));
      console.log(laneTime[i]);
    }

    for (let i = 0; i < n; i++) {
      let y = laneTime[i];
      if (y < totalTime / 10) {
        y = totalTime / 10;
      }
      if (y > totalTime / 2) {
        y = totalTime / 2;
      }
      let x = 0;
      console.log(`Lane ${i + 1} is green`);
      while (burst_time[i] != 0 && x <= y) {
        await sleep(3000);
        x += 3;
        // burst_time[i] = get input
      }
        console.log(`Lane ${i + 1} is Yellow`);
        await sleep(3000);
        console.log(`Lane ${i + 1} is Red`);
    }
  }
}
change();
