function drawRace(indices: number[], length: number): string {
  const LANE_SYMBOL = '~';
  const RAINDEER_SYMBOL = 'r';
  const LINE_NUMBER_SYMBOL = '/';

  const plainLane = LANE_SYMBOL.repeat(length).split('');

  return indices
    .map((lanePosition, i) => {
      let laneWithRaindeer = plainLane.join('');

      if (lanePosition !== 0) {
        const lane = [...plainLane];
        lane.splice(lanePosition, 1, RAINDEER_SYMBOL)
        laneWithRaindeer = lane.join('');
      }

      const lineNumber = `${LINE_NUMBER_SYMBOL}${i + 1}`

      const isometricView = ' '.repeat(indices.length - i - 1);

      return `${isometricView}${laneWithRaindeer} ${lineNumber}`;
    })
    .join('\n');
}

export default async function () {
  return drawRace([1, -1, 0, 5, -2], 8);
}
