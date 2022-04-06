"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.canMoveAny = exports.canMove = exports._canMove = void 0;
const context_1 = require("../context");
function _canMove(boardSide, before, after) {
    return (JSON.stringify(before) !==
        JSON.stringify((0, context_1.boardSchema)(boardSide).parse(after)));
}
exports._canMove = _canMove;
function canMove(ctx) {
    return _canMove(ctx.boardSide, ctx.board, ctx._tempBoards.next);
}
exports.canMove = canMove;
function canMoveAny(ctx) {
    const _func = (arg) => _canMove(ctx.boardSide, ctx.board, arg);
    const canMoveLeft = _func(ctx._tempBoards.left);
    const canMoveRight = _func(ctx._tempBoards.right);
    const canMoveUp = _func(ctx._tempBoards.up);
    const canMoveDown = _func(ctx._tempBoards.down);
    return canMoveLeft || canMoveRight || canMoveUp || canMoveDown;
}
exports.canMoveAny = canMoveAny;
