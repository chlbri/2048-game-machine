import { literal, number, object, union } from 'zod';
import { boardSchema } from './board';
import { BoardSide } from './boardSide';
import { inferF } from './types';

export function contextSchema(boardSide: BoardSide) {
  const board = boardSchema(boardSide);
  return object({
    board,
    _tempBoards: object({
      left: board.optional(),
      right: board.optional(),
      up: board.optional(),
      down: board.optional(),
      next: board.optional(),
    }).optional(),

    boardSide: number(),
    moves: number(),
    statistics: object({}).optional(),
    score: number(),
    iterator: number(),
  });
}

export type TContext = inferF<typeof contextSchema>;
