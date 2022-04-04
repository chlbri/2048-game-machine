import { array } from 'zod';
import type { inferF } from './';
import { BoardSide, boardSideSchema } from './boardSide';
import { cardValueSchema } from './card';

export const boardSchema = (boardSide: BoardSide) => {
  const side = boardSideSchema.parse(boardSide);
  const square = Math.pow(side, 2);
  return array(cardValueSchema).length(square);
};

export type Board = inferF<typeof boardSchema>;
