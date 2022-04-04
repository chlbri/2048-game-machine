import type { inferF } from './';
import { BoardSide } from './boardSide';
export declare const boardSchema: (boardSide: BoardSide) => import("zod").ZodArray<import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodNumber, number, number>>, "many">;
export declare type Board = inferF<typeof boardSchema>;
