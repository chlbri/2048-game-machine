"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveUpTemp = exports._moveUp = void 0;
const immer_1 = require("@xstate/immer");
const groupByColumns_1 = require("../helpers/groupByColumns");
const groupByRows_1 = require("../helpers/groupByRows");
const moveArray_1 = require("../helpers/moveArray");
const transformToCards_1 = require("../helpers/transformToCards");
const transpose2D_1 = require("../helpers/transpose2D");
function _moveUp(boardSide, board) {
    const columns = (0, groupByColumns_1.groupByColumns)(boardSide, board)
        .map(column => (0, transformToCards_1.transformToCards)(...column.reverse()))
        .map(moveArray_1.moveCards)
        .map(cards => cards.reverse());
    console.log('columns =>', columns);
    const rows = (0, transpose2D_1.transpose2D)(columns);
    console.log('rows =>', rows);
    const _board = (0, groupByRows_1.rowsToBoard)(rows);
    console.log('_board', board);
    return _board;
}
exports._moveUp = _moveUp;
exports.moveUpTemp = (0, immer_1.assign)(ctx => {
    const next = _moveUp(ctx.boardSide, ctx.board);
    ctx._tempBoards.up = next;
    ctx._tempBoards.next = next;
});
