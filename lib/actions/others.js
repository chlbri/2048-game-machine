"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeBoardSide = exports.updateGame = exports.startGame = exports.stopGame = exports.score = exports.inc = exports.move = exports.rinitMoves = exports.rinitScore = exports.addMoves = exports.createBoard = void 0;
const immer_1 = require("@xstate/immer");
const xstate_1 = require("xstate");
const context_1 = require("../context");
exports.createBoard = (0, immer_1.assign)(ctx => {
    const length = ctx.boardSide * ctx.boardSide;
    ctx.board = (0, context_1.boardSchema)(ctx.boardSide).parse(Array.from({ length }).fill(undefined));
});
exports.addMoves = (0, immer_1.assign)(ctx => {
    ctx.moves = ctx.moves + 1;
});
exports.rinitScore = (0, immer_1.assign)(ctx => {
    ctx.score = 0;
});
exports.rinitMoves = (0, immer_1.assign)(ctx => {
    ctx.moves = 0;
});
exports.move = (0, immer_1.assign)(ctx => {
    var _a;
    ctx.board = (0, context_1.boardSchema)(ctx.boardSide).parse((_a = ctx._tempBoards) === null || _a === void 0 ? void 0 : _a.next);
});
exports.inc = (0, immer_1.assign)(ctx => {
    ctx.iterator = ctx.iterator + 1;
});
exports.score = (0, immer_1.assign)(ctx => {
    const boardScore = ctx.board
        .map(val => val !== null && val !== void 0 ? val : 0)
        .reduce((acc, curr) => (acc += curr), 0);
    ctx.score = boardScore + Math.round(Math.sqrt(ctx.moves * boardScore));
});
exports.stopGame = (0, xstate_1.sendParent)('GAME.STOP');
exports.startGame = (0, xstate_1.sendParent)('GAME.START');
exports.updateGame = (0, xstate_1.sendParent)(({ board, moves, score, statistics }) => ({
    type: 'GAME.UPDATE',
    board,
    moves,
    score,
    statistics,
}));
exports.changeBoardSide = (0, immer_1.assign)((ctx, { boardSide }) => {
    ctx.boardSide = boardSide;
});
