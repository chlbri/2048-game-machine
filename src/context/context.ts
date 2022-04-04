import { number, object } from 'zod';
import { boardSchema } from './board';
import { BoardSide } from './boardSide';
import { inferF } from './types';

export function contextSchema(boardSide: BoardSide) {
  const board = boardSchema(boardSide);
  return object({
    board,
    _tempBoards: object({
      left: board,
      right: board,
      up: board,
      down: board,
    }),
    boardSide: number(),
    moves: number(),
    statistics: number(),
    score: number(),
    iterator: number(),
  });
}

export type TContext = inferF<typeof contextSchema>;
