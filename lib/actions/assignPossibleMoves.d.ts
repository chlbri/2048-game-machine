export declare const assignPossibleMoves: import("xstate").AssignAction<{
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
}, any>;
