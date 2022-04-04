import { assign } from '@xstate/immer';
import { Board, BoardSide } from '../../context';
import { TContext } from '../../context/context';
import { groupByColumns } from '../helpers/groupByColumns';
import { rowsToBoard } from '../helpers/groupByRows';
import { moveCards } from '../helpers/moveArray';
import { transformToCards } from '../helpers/transformToCards';
import { transpose2D } from '../helpers/transpose2D';

export function _moveDown(boardSide: BoardSide, board: Board): Board {
  const columns = groupByColumns(boardSide, board)
    .map(column => transformToCards(...column))
    .map(moveCards);

  const rows = transpose2D(columns);
  const _board = rowsToBoard(rows);
  return _board;
}

export const moveDown = assign<TContext, never>(ctx => {
  ctx._tempBoards.down = _moveDown(ctx.boardSide, ctx.board);
});
