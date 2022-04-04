"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chunksSchema = void 0;
const zod_1 = require("zod");
const card_1 = require("./card");
const chunksSchema = (boardSide) => {
    return zod_1.z
        .array(zod_1.z.array(card_1.cardValueSchema).length(boardSide))
        .length(boardSide);
};
exports.chunksSchema = chunksSchema;
