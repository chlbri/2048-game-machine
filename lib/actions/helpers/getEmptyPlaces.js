"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmptyPlaces = void 0;
function getEmptyPlaces(board) {
    return board.map((card, i) => [card, i])
        .filter(([card]) => !card)
        .map(([, i]) => i);
}
exports.getEmptyPlaces = getEmptyPlaces;
