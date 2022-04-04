import { assign } from '@xstate/immer';
import { boardSchema, TContext } from '../context';

export const createBoard = assign<TContext, never>(ctx => {
  const length = ctx.boardSide * ctx.boardSide;
  ctx.board = boardSchema(ctx.boardSide).parse(
    Array.from({ length }).fill(undefined),
  );
});

export const addMoves = assign<TContext, any>(ctx => {
  ctx.moves = ctx.moves + 1;
});

export const move = assign<TContext, any>(ctx => {
  ctx.board = ctx._tempBoards?.next ?? ctx.board;
});

export const inc = assign<TContext, any>(ctx => {
  ctx.iterator = ctx.iterator + 1;
});
