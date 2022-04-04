"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addRandomNumber = exports._addRandomNumber = exports.nextNumber = void 0;
// import { assign } from '@xstate/immer';
const immer_1 = require("@xstate/immer");
const getEmptyPlaces_1 = require("./helpers/getEmptyPlaces");
function nextNumber() {
    const rand = Math.random();
    return rand < 0.7 ? 2 : 4;
}
exports.nextNumber = nextNumber;
const _addRandomNumber = (board) => {
    const _board = [...board];
    const emptyPlaces = (0, getEmptyPlaces_1.getEmptyPlaces)(_board);
    if (emptyPlaces.length < 1)
        return _board;
    const rand = Math.floor(Math.random() * (emptyPlaces.length - 1));
    _board[emptyPlaces[rand]] = nextNumber();
    return _board;
};
exports._addRandomNumber = _addRandomNumber;
exports.addRandomNumber = (0, immer_1.assign)(ctx => {
    ctx.board = (0, exports._addRandomNumber)(ctx.board);
});
