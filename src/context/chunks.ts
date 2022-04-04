import { z } from 'zod';
import { BoardSide } from './boardSide';
import { cardValueSchema } from './card';
import { inferF } from './types';

export const chunksSchema = (boardSide: BoardSide) => {
  return z
    .array(z.array(cardValueSchema).length(boardSide))
    .length(boardSide);
};

export type Chunks = inferF<typeof chunksSchema>;
