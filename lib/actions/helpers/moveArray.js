"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveCards = exports.machine = void 0;
const fstate_1 = require("@bemedev/fstate");
const context_1 = require("../../context");
exports.machine = (0, fstate_1.createMachine)({
    context: {
        current: context_1.Card.default,
        next: context_1.Card.default,
        moved: false,
    },
    initial: 'idle',
    tsTypes: {
        context: {},
        args: {},
    },
    states: {
        idle: {
            type: 'sync',
            transitions: {
                target: 'assign',
            },
        },
        assign: {
            type: 'sync',
            transitions: {
                actions: 'assign',
                target: 'work',
            },
        },
        work: {
            type: 'sync',
            transitions: [
                {
                    conditions: 'currentIsEmpty',
                    target: 'final',
                },
                {
                    conditions: 'currentIsMerged',
                    target: 'final',
                },
                {
                    conditions: 'nextIsMerged',
                    target: 'final',
                },
                {
                    target: 'checkingNext',
                },
            ],
        },
        final: {
            type: 'final',
        },
        next: {
            type: 'sync',
            transitions: {
                actions: ['removeCurrent', 'move'],
                target: 'final',
            },
        },
        checkingNext: {
            type: 'sync',
            transitions: [
                {
                    conditions: 'nextIsEmpty',
                    actions: 'moveToNext',
                    target: 'next',
                },
                {
                    conditions: 'currentEqualsNext',
                    actions: ['addToNext', 'mergeNext'],
                    target: 'next',
                },
                {
                    target: 'final',
                },
            ],
        },
    },
}, {
    conditions: {
        currentIsEmpty: ({ current }) => current.isEmpty,
        nextIsEmpty: ({ next }) => next.isEmpty,
        nextIsMerged: ({ next }) => next.isMerged,
        currentIsMerged: ({ current }) => current.isMerged,
        currentEqualsNext: ({ next, current }) => next.canMergeSibling(current),
    },
    actions: {
        removeCurrent: ctx => ctx.current.rinit(),
        moveToNext: ctx => ctx.next.assignSibling(ctx.current),
        mergeNext: ctx => ctx.next.merge(),
        addToNext: ctx => ctx.next.addSibling(ctx.current),
        move: ctx => {
            ctx.moved = true;
        },
        assign: (ctx, ev) => {
            ctx.current = ev.current;
            ctx.next = ev.next;
        },
    },
});
function moveCards(cards) {
    const last = cards.length - 1;
    const _cards = [...cards];
    const output = Array.from({ length: cards.length }).fill(undefined);
    for (let index = last - 1; index >= 0; index--) {
        let pos = index;
        let moved = true;
        while (moved && pos < last) {
            const out = (0, fstate_1.serve)(exports.machine)({
                current: _cards[pos],
                next: _cards[pos + 1],
            });
            _cards[pos + 1] = out.next;
            moved = out.moved;
            output[pos] = _cards[pos].value;
            output[pos + 1] = _cards[pos + 1].value;
            pos++;
        }
    }
    return output;
}
exports.moveCards = moveCards;
