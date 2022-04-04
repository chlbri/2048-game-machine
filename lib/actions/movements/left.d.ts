import { Board, BoardSide } from '../../context';
export declare function _moveLeft(boardSide: BoardSide, board: Board): Board;
export declare const moveLeftTemp: import("xstate").AssignAction<{
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
}, never>;
