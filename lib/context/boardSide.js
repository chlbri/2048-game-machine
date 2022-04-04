"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boardSideSchema = void 0;
const zod_1 = require("zod");
exports.boardSideSchema = zod_1.z
    .number()
    .int()
    .gte(3, {
    message: 'Must be superior or equals to "3"',
})
    .lte(8, {
    message: 'Must be inferior or equals to "8"',
});
