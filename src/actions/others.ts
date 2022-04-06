import { assign } from '@xstate/immer';
import { sendParent } from 'xstate';
import { boardSchema, TContext } from '../context';
import { CHANGE_BOARDSIDE_EVENT, ParentEvent } from '../events';

export const createBoard = assign<TContext, any>(ctx => {
  const length = ctx.boardSide * ctx.boardSide;
  ctx.board = boardSchema(ctx.boardSide).parse(
    Array.from({ length }).fill(undefined),
  );
});

export const addMoves = assign<TContext, any>(ctx => {
  ctx.moves = ctx.moves + 1;
});

export const move = assign<TContext, any>(ctx => {
  ctx.board = boardSchema(ctx.boardSide).parse(ctx._tempBoards?.next);
});

export const inc = assign<TContext, any>(ctx => {
  ctx.iterator = ctx.iterator + 1;
});

export const score = assign<TContext, any>(ctx => {
  const boardScore = ctx.board
    .map(val => val ?? 0)
    .reduce((acc, curr) => (acc += curr));

  ctx.score = boardScore + Math.round(Math.sqrt(ctx.moves * boardScore));
});

export const stopGame = sendParent<TContext, any, ParentEvent>(
  'GAME.STOP',
);

export const startGame = sendParent<TContext, any, ParentEvent>(
  'GAME.START',
);

export const updateGame = sendParent<TContext, any, ParentEvent>(
  ({ board, moves, score, statistics }) => ({
    type: 'GAME.UPDATE',
    board,
    moves,
    score,
    statistics,
  }),
);

export const changeBoardSide = assign<TContext, CHANGE_BOARDSIDE_EVENT>(
  (ctx, { boardSide }) => {
    ctx.boardSide = boardSide;
  },
);
