"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boardSchema = void 0;
const zod_1 = require("zod");
const boardSide_1 = require("./boardSide");
const card_1 = require("./card");
const boardSchema = (boardSide) => {
    const side = boardSide_1.boardSideSchema.parse(boardSide);
    const square = Math.pow(side, 2);
    return (0, zod_1.array)(card_1.cardValueSchema).length(square);
};
exports.boardSchema = boardSchema;
