"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contextSchema = void 0;
const zod_1 = require("zod");
const board_1 = require("./board");
const boardSide_1 = require("./boardSide");
function contextSchema(boardSide) {
    const board = (0, board_1.boardSchema)(boardSide);
    return (0, zod_1.object)({
        board,
        _tempBoards: (0, zod_1.object)({
            left: board,
            right: board,
            up: board,
            down: board,
            next: board,
        }),
        boardSide: boardSide_1.boardSideSchema,
        moves: (0, zod_1.number)(),
        statistics: (0, zod_1.object)({}).optional(),
        score: (0, zod_1.number)(),
        iterator: (0, zod_1.number)(),
    });
}
exports.contextSchema = contextSchema;
