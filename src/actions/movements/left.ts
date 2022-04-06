import { assign } from '@xstate/immer';
import { Board, BoardSide } from '../../context';
import { TContext } from '../../context/context';
import { groupByRows, rowsToBoard } from '../helpers/groupByRows';
import { moveCards } from '../helpers/moveArray';
import { transformToCards } from '../helpers/transformToCards';

export function _moveLeft(boardSide: BoardSide, board: Board): Board {
  const rows = groupByRows(boardSide, board)
    .map(column => transformToCards(...column.reverse()))
    .map(moveCards)
    .map(cards => cards.reverse());

  const _board = rowsToBoard(rows);
  return _board;
}

export const moveLeftTemp = assign<TContext, never>(ctx => {
  ctx._tempBoards.next = ctx._tempBoards.left;
});
