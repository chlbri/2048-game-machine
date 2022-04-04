"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rowsToBoard = exports.groupByRows = void 0;
const context_1 = require("../../context");
function groupByRows(boardSide, board) {
    const chunks = [];
    for (let index = 0; index < board.length; index += boardSide) {
        const chunk = board.slice(index, index + boardSide);
        chunks.push(chunk);
    }
    return (0, context_1.chunksSchema)(boardSide).parse(chunks);
}
exports.groupByRows = groupByRows;
function rowsToBoard(rows) {
    return rows.reduce((acc, row) => {
        acc.push(...row);
        return acc;
    }, []);
}
exports.rowsToBoard = rowsToBoard;
