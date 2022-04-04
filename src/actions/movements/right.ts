import { assign } from '@xstate/immer';
import { Board, BoardSide } from '../../context';
import { TContext } from '../../context/context';
import { groupByRows, rowsToBoard } from '../helpers/groupByRows';
import { moveCards } from '../helpers/moveArray';
import { transformToCards } from '../helpers/transformToCards';

export function _moveRight(boardSide: BoardSide, board: Board): Board {
  const rows = groupByRows(boardSide, board)
    .map(column => transformToCards(...column))
    .map(moveCards);

  const _board = rowsToBoard(rows);
  return _board;
}

export const moveRightTemp = assign<TContext, never>(ctx => {
  const next = _moveRight(ctx.boardSide, ctx.board);
  (ctx._tempBoards as any).right = next;
  (ctx._tempBoards as any).next = next;
});
