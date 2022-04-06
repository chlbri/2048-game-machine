"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveDownTemp = exports._moveDown = void 0;
const immer_1 = require("@xstate/immer");
const groupByColumns_1 = require("../helpers/groupByColumns");
const groupByRows_1 = require("../helpers/groupByRows");
const moveArray_1 = require("../helpers/moveArray");
const transformToCards_1 = require("../helpers/transformToCards");
const transpose2D_1 = require("../helpers/transpose2D");
function _moveDown(boardSide, board) {
    const columns = (0, groupByColumns_1.groupByColumns)(boardSide, board)
        .map(column => (0, transformToCards_1.transformToCards)(...column))
        .map(moveArray_1.moveCards);
    const rows = (0, transpose2D_1.transpose2D)(columns);
    const _board = (0, groupByRows_1.rowsToBoard)(rows);
    return _board;
}
exports._moveDown = _moveDown;
exports.moveDownTemp = (0, immer_1.assign)(ctx => {
    ctx._tempBoards.next = ctx._tempBoards.down;
});
