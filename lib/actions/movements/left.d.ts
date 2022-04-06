import { Board, BoardSide } from '../../context';
export declare function _moveLeft(boardSide: BoardSide, board: Board): Board;
export declare const moveLeftTemp: import("xstate").AssignAction<{
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
}, never>;
