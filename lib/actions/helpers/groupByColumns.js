"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupByColumns = void 0;
const groupByRows_1 = require("./groupByRows");
const transpose2D_1 = require("./transpose2D");
function groupByColumns(boardSide, board) {
    return (0, transpose2D_1.transpose2D)((0, groupByRows_1.groupByRows)(boardSide, board));
}
exports.groupByColumns = groupByColumns;
