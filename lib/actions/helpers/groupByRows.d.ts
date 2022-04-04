import { Board, BoardSide, Chunks } from '../../context';
export declare function groupByRows(boardSide: BoardSide, board: Board): (number | undefined)[][];
export declare function rowsToBoard(rows: Chunks): (number | undefined)[];
