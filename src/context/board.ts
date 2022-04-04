import { array } from 'zod';
import { BoardSide, boardSideSchema } from './boardSide';
import { cardValueSchema } from './card';
import type { inferF } from './';

export const boardSchema = (boardSide: BoardSide) => {
  const side = boardSideSchema.parse(boardSide);
  const square = Math.pow(side, 2);
  return array(cardValueSchema).refine(arr => arr.length === square);
};

export type Board = inferF<typeof boardSchema>;
