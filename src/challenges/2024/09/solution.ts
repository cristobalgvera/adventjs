type Board = string[]
type Movement = 'U' | 'D' | 'R' | 'L'
type Result = 'none' | 'crash' | 'eat'

function moveTrain(board: Board, mov: Movement): Result {
  const ENGINE = '@';
  const CARRIAGE = 'o';
  const MAGICAL_FRUIT = '*';

  const NEXT_MOVEMENT: { [key in Movement]: [number, number] } = {
    L: [0, -1],
    R: [0, 1],
    U: [-1, 0],
    D: [1, 0],
  };

  let engineCoordinates: [number, number] = [-1, -1];

  for (let i = 0; i < board.length; i++) {
    const index = board[i].indexOf(ENGINE);
    if (index === -1) continue;

    engineCoordinates = [i, index];
    break;
  }

  const [di, dj] = NEXT_MOVEMENT[mov];

  const newI = engineCoordinates[0] + di;
  const newJ = engineCoordinates[1] + dj;

  const newCell = board[newI]?.[newJ];

  switch (newCell) {
    case MAGICAL_FRUIT:
      return 'eat';
    case CARRIAGE:
      return 'crash';
    default:
      return 'none';
  }
}

export default async function () {
  const board: Board = ['·····', '*····', '@····', 'o····', 'o····'];

  return moveTrain(board, 'L');
}
