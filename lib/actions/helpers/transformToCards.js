"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformToCards = void 0;
const context_1 = require("../../context");
function transformToCards(...moveArray) {
    return moveArray.map((value) => {
        return new context_1.Card(value);
    });
}
exports.transformToCards = transformToCards;
