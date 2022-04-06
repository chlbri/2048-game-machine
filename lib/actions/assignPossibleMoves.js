"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assignPossibleMoves = void 0;
const immer_1 = require("@xstate/immer");
const movements_1 = require("./movements");
exports.assignPossibleMoves = (0, immer_1.assign)(ctx => {
    ctx._tempBoards = {
        down: (0, movements_1._moveDown)(ctx.boardSide, ctx.board),
        up: (0, movements_1._moveUp)(ctx.boardSide, ctx.board),
        left: (0, movements_1._moveLeft)(ctx.boardSide, ctx.board),
        right: (0, movements_1._moveRight)(ctx.boardSide, ctx.board),
        next: [],
    };
});
