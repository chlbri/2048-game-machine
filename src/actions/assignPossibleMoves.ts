import { assign } from '@xstate/immer';
import { TContext } from '../context';
import { _moveDown, _moveLeft, _moveRight, _moveUp } from './movements';

export const assignPossibleMoves = assign<TContext, any>(ctx => {
  ctx._tempBoards = {
    down: _moveDown(ctx.boardSide, ctx.board),
    up: _moveUp(ctx.boardSide, ctx.board),
    left: _moveLeft(ctx.boardSide, ctx.board),
    right: _moveRight(ctx.boardSide, ctx.board),
    next: [],
  };
});
