import { Board, BoardSide } from '../../context';
import { groupByRows } from './groupByRows';
import { transpose2D } from './transpose2D';

export function groupByColumns(boardSide: BoardSide, board: Board) {
  return transpose2D(groupByRows(boardSide, board));
}
