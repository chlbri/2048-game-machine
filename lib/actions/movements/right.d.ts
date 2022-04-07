import { Board, BoardSide } from '../../context';
export declare function _moveRight(boardSide: BoardSide, board: Board): Board;
export declare const moveRightTemp: import("xstate").AssignAction<{
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
}, never>;
