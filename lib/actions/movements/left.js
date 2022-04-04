"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveLeftTemp = exports._moveLeft = void 0;
const immer_1 = require("@xstate/immer");
const groupByRows_1 = require("../helpers/groupByRows");
const moveArray_1 = require("../helpers/moveArray");
const transformToCards_1 = require("../helpers/transformToCards");
function _moveLeft(boardSide, board) {
    const rows = (0, groupByRows_1.groupByRows)(boardSide, board)
        .map(column => (0, transformToCards_1.transformToCards)(...column.reverse()))
        .map(moveArray_1.moveCards)
        .map(cards => cards.reverse());
    const _board = (0, groupByRows_1.rowsToBoard)(rows);
    return _board;
}
exports._moveLeft = _moveLeft;
exports.moveLeftTemp = (0, immer_1.assign)(ctx => {
    const next = _moveLeft(ctx.boardSide, ctx.board);
    ctx._tempBoards.left = next;
    ctx._tempBoards.next = next;
});
