"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.canMoveAny = exports.canMove = void 0;
function _canMove(before, after) {
    return !after || JSON.stringify(before) !== JSON.stringify(after);
}
function canMove(ctx) {
    var _a;
    const before = ctx.board;
    const after = (_a = ctx._tempBoards) === null || _a === void 0 ? void 0 : _a.next;
    return _canMove(before, after);
}
exports.canMove = canMove;
function canMoveAny(ctx) {
    var _a, _b, _c, _d;
    const _func = (arg) => _canMove(ctx.board, arg);
    const canMoveLeft = _func((_a = ctx._tempBoards) === null || _a === void 0 ? void 0 : _a.left);
    const canMoveRight = _func((_b = ctx._tempBoards) === null || _b === void 0 ? void 0 : _b.right);
    const canMoveUp = _func((_c = ctx._tempBoards) === null || _c === void 0 ? void 0 : _c.up);
    const canMoveDown = _func((_d = ctx._tempBoards) === null || _d === void 0 ? void 0 : _d.down);
    return canMoveLeft || canMoveRight || canMoveUp || canMoveDown;
}
exports.canMoveAny = canMoveAny;
