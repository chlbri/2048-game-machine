"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boardSideSchema = void 0;
const zod_1 = require("zod");
exports.boardSideSchema = zod_1.z.union([
    zod_1.z.literal(4),
    zod_1.z.literal(5),
    zod_1.z.literal(6),
]);
