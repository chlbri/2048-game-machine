"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveRightTemp = exports._moveRight = void 0;
const immer_1 = require("@xstate/immer");
const groupByRows_1 = require("../helpers/groupByRows");
const moveArray_1 = require("../helpers/moveArray");
const transformToCards_1 = require("../helpers/transformToCards");
function _moveRight(boardSide, board) {
    const rows = (0, groupByRows_1.groupByRows)(boardSide, board)
        .map(column => (0, transformToCards_1.transformToCards)(...column))
        .map(moveArray_1.moveCards);
    const _board = (0, groupByRows_1.rowsToBoard)(rows);
    return _board;
}
exports._moveRight = _moveRight;
exports.moveRightTemp = (0, immer_1.assign)(ctx => {
    const next = _moveRight(ctx.boardSide, ctx.board);
    ctx._tempBoards.right = next;
    ctx._tempBoards.next = next;
});
