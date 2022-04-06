import { BoardSide } from './boardSide';
import { inferF } from './types';
export declare function contextSchema(boardSide: BoardSide): import("zod").ZodObject<{
    board: import("zod").ZodArray<import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodNumber, number, number>>, "many">;
    _tempBoards: import("zod").ZodObject<{
        left: import("zod").ZodArray<import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodNumber, number, number>>, "many">;
        right: import("zod").ZodArray<import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodNumber, number, number>>, "many">;
        up: import("zod").ZodArray<import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodNumber, number, number>>, "many">;
        down: import("zod").ZodArray<import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodNumber, number, number>>, "many">;
        next: import("zod").ZodArray<import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodNumber, number, number>>, "many">;
    }, "strip", import("zod").ZodTypeAny, {
        left: (number | undefined)[];
        right: (number | undefined)[];
        up: (number | undefined)[];
        down: (number | undefined)[];
        next: (number | undefined)[];
    }, {
        left: (number | undefined)[];
        right: (number | undefined)[];
        up: (number | undefined)[];
        down: (number | undefined)[];
        next: (number | undefined)[];
    }>;
    boardSide: import("zod").ZodNumber;
    moves: import("zod").ZodNumber;
    statistics: import("zod").ZodOptional<import("zod").ZodObject<{}, "strip", import("zod").ZodTypeAny, {}, {}>>;
    score: import("zod").ZodNumber;
    iterator: import("zod").ZodNumber;
}, "strip", import("zod").ZodTypeAny, {
    statistics?: {} | undefined;
    board: (number | undefined)[];
    _tempBoards: {
        left: (number | undefined)[];
        right: (number | undefined)[];
        up: (number | undefined)[];
        down: (number | undefined)[];
        next: (number | undefined)[];
    };
    boardSide: number;
    moves: number;
    score: number;
    iterator: number;
}, {
    statistics?: {} | undefined;
    board: (number | undefined)[];
    _tempBoards: {
        left: (number | undefined)[];
        right: (number | undefined)[];
        up: (number | undefined)[];
        down: (number | undefined)[];
        next: (number | undefined)[];
    };
    boardSide: number;
    moves: number;
    score: number;
    iterator: number;
}>;
export declare type TContext = inferF<typeof contextSchema>;
