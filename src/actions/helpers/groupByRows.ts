import { Board, BoardSide, Chunks, chunksSchema } from '../../context';

export function groupByRows(boardSide: BoardSide, board: Board) {
  const chunks: Chunks = [];
  for (let index = 0; index < board.length; index += boardSide) {
    const chunk = board.slice(index, index + boardSide);
    chunks.push(chunk);
  }

  return chunksSchema(boardSide).parse(chunks);
}

export function rowsToBoard(rows: Chunks) {
  return rows.reduce((acc, row) => {
    acc.push(...row);
    return acc;
  }, [] as Board);
}
