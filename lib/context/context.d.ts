import { BoardSide } from './boardSide';
import { inferF } from './types';
export declare function contextSchema(boardSide: BoardSide): import("zod").ZodObject<{
    board: import("zod").ZodArray<import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodNumber, number, number>>, "many">;
    _tempBoards: import("zod").ZodOptional<import("zod").ZodObject<{
        left: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodNumber, number, number>>, "many">>;
        right: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodNumber, number, number>>, "many">>;
        up: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodNumber, number, number>>, "many">>;
        down: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodNumber, number, number>>, "many">>;
        next: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodNumber, number, number>>, "many">>;
    }, "strip", import("zod").ZodTypeAny, {
        left?: (number | undefined)[] | undefined;
        right?: (number | undefined)[] | undefined;
        up?: (number | undefined)[] | undefined;
        down?: (number | undefined)[] | undefined;
        next?: (number | undefined)[] | undefined;
    }, {
        left?: (number | undefined)[] | undefined;
        right?: (number | undefined)[] | undefined;
        up?: (number | undefined)[] | undefined;
        down?: (number | undefined)[] | undefined;
        next?: (number | undefined)[] | undefined;
    }>>;
    boardSide: import("zod").ZodNumber;
    moves: import("zod").ZodNumber;
    statistics: import("zod").ZodOptional<import("zod").ZodObject<{}, "strip", import("zod").ZodTypeAny, {}, {}>>;
    score: import("zod").ZodNumber;
    iterator: import("zod").ZodNumber;
}, "strip", import("zod").ZodTypeAny, {
    _tempBoards?: {
        left?: (number | undefined)[] | undefined;
        right?: (number | undefined)[] | undefined;
        up?: (number | undefined)[] | undefined;
        down?: (number | undefined)[] | undefined;
        next?: (number | undefined)[] | undefined;
    } | undefined;
    statistics?: {} | undefined;
    board: (number | undefined)[];
    boardSide: number;
    moves: number;
    score: number;
    iterator: number;
}, {
    _tempBoards?: {
        left?: (number | undefined)[] | undefined;
        right?: (number | undefined)[] | undefined;
        up?: (number | undefined)[] | undefined;
        down?: (number | undefined)[] | undefined;
        next?: (number | undefined)[] | undefined;
    } | undefined;
    statistics?: {} | undefined;
    board: (number | undefined)[];
    boardSide: number;
    moves: number;
    score: number;
    iterator: number;
}>;
export declare type TContext = inferF<typeof contextSchema>;
