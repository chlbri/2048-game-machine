import { z } from 'zod';
import { BoardSide } from './boardSide';
import { inferF } from './types';
export declare const chunksSchema: (boardSide: BoardSide) => z.ZodArray<z.ZodArray<z.ZodOptional<z.ZodEffects<z.ZodNumber, number, number>>, "many">, "many">;
export declare type Chunks = inferF<typeof chunksSchema>;
