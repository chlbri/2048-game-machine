import { Board, BoardSide } from '../../context';
export declare function _moveDown(boardSide: BoardSide, board: Board): Board;
export declare const moveDownTemp: import("xstate").AssignAction<{
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
