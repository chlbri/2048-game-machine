"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inc = exports.move = exports.addMoves = exports.createBoard = void 0;
const immer_1 = require("@xstate/immer");
const context_1 = require("../context");
exports.createBoard = (0, immer_1.assign)(ctx => {
    const length = ctx.boardSide * ctx.boardSide;
    ctx.board = (0, context_1.boardSchema)(ctx.boardSide).parse(Array.from({ length }).fill(undefined));
});
exports.addMoves = (0, immer_1.assign)(ctx => {
    ctx.moves = ctx.moves + 1;
});
exports.move = (0, immer_1.assign)(ctx => {
    var _a, _b;
    ctx.board = (_b = (_a = ctx._tempBoards) === null || _a === void 0 ? void 0 : _a.next) !== null && _b !== void 0 ? _b : ctx.board;
});
exports.inc = (0, immer_1.assign)(ctx => {
    ctx.iterator = ctx.iterator + 1;
});
