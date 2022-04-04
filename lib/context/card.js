"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = exports.cardValueSchema = exports.cardSchema = void 0;
const zod_1 = require("zod");
const value = zod_1.z
    .number()
    .refine(arg => !(arg & (arg - 1)) && arg >= 2)
    .optional();
exports.cardValueSchema = value;
exports.cardSchema = zod_1.z.object({
    value,
    merged: zod_1.z.boolean(),
});
class Card {
    constructor(value) {
        this.merged = false;
        this.value = value;
    }
    rinit() {
        this.value = undefined;
    }
    canMergeSibling(card) {
        return !!this.value && !this.merged && this.value === card.value;
    }
    get isEmpty() {
        return !this.value;
    }
    get isMerged() {
        return this.merged;
    }
    merge() {
        this.merged = true;
    }
    assignSibling(card) {
        this.value = card.value;
    }
    addSibling(card) {
        var _a;
        const adding = card.value;
        if (adding) {
            this.value = ((_a = this.value) !== null && _a !== void 0 ? _a : 0) + adding;
        }
    }
    toObject() {
        return {
            merged: this.merged,
            value: this.value,
        };
    }
}
exports.Card = Card;
Card.default = new Card();
