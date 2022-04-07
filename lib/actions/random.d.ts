export declare const _addRandomNumber: (board: (number | undefined)[]) => (number | undefined)[];
export declare const addRandomNumber: import("xstate").AssignAction<{
    statistics?: {} | undefined;
    board: (number | undefined)[];
    _tempBoards: {
        left: (number | undefined)[];
        right: (number | undefined)[];
        up: (number | undefined)[];
        down: (number | undefined)[];
        next: (number | undefined)[];
    };
    boardSide: 4 | 5 | 6;
    moves: number;
    score: number;
    iterator: number;
}, any>;
