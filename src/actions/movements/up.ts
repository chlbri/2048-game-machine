import { assign } from '@xstate/immer';
import { Board, BoardSide } from '../../context';
import { TContext } from '../../context/context';
import { groupByColumns } from '../helpers/groupByColumns';
import { rowsToBoard } from '../helpers/groupByRows';
import { moveCards } from '../helpers/moveArray';
import { transformToCards } from '../helpers/transformToCards';
import { transpose2D } from '../helpers/transpose2D';

export function _moveUp(boardSide: BoardSide, board: Board): Board {
  const columns = groupByColumns(boardSide, board)
    .map(column => transformToCards(...column.reverse()))
    .map(moveCards)
    .map(cards => cards.reverse());

  console.log('columns =>', columns);

  const rows = transpose2D(columns);
  console.log('rows =>', rows);
  const _board = rowsToBoard(rows);
  console.log('_board', board);
  return _board;
}

export const moveUpTemp = assign<TContext, never>(ctx => {
  const next = _moveUp(ctx.boardSide, ctx.board);
  (ctx._tempBoards as any).up = next;
  (ctx._tempBoards as any).next = next;
});
