export declare function nextNumber(): 2 | 4;
export declare const _addRandomNumber: (board: (number | undefined)[]) => (number | undefined)[];
export declare const addRandomNumber: import("xstate").AssignAction<{
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
}, any>;
