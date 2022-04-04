"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameMachine = void 0;
const Machine_1 = require("xstate/lib/Machine");
const actions_1 = require("./actions");
const context_1 = require("./context");
const guards_1 = require("./guards");
function gameMachine(value) {
    const boardSide = context_1.boardSideSchema.parse(value);
    return (0, Machine_1.createMachine)({
        id: 'gameMachine',
        context: {
            board: [],
            boardSide,
            iterator: 0,
            moves: 0,
            score: 0,
        },
        initial: 'idle',
        tsTypes: {},
        schema: {
            context: {},
            events: {},
        },
        states: {
            idle: {
                exit: 'inc',
                on: {
                    START: {
                        actions: 'createBoard',
                        target: 'firstRandom',
                    },
                },
            },
            firstRandom: {
                entry: 'addRandomNumber',
                exit: 'inc',
                after: {
                    '50': {
                        target: 'secondRandom',
                    },
                },
            },
            secondRandom: {
                entry: 'addRandomNumber',
                exit: 'inc',
                after: {
                    '50': {
                        target: 'gameStarted',
                    },
                },
            },
            gameStarted: {
                initial: 'assigningPossibleMoves',
                states: {
                    fixed: {
                        on: {
                            'MOVE.UP': {
                                actions: 'moveUpTemp',
                                target: 'checkingMoves',
                            },
                            'MOVE.DOWN': {
                                actions: 'moveDownTemp',
                                target: 'checkingMoves',
                            },
                            'MOVE.LEFT': {
                                actions: 'moveLeftTemp',
                                target: 'checkingMoves',
                            },
                            'MOVE.RIGHT': {
                                actions: 'moveRightTemp',
                                target: 'checkingMoves',
                            },
                        },
                    },
                    checkingMoves: {
                        exit: 'inc',
                        after: {
                            '50': [
                                {
                                    actions: 'move',
                                    cond: 'canMove',
                                    target: 'moving',
                                },
                                {
                                    target: 'fixed',
                                },
                            ],
                        },
                    },
                    moving: {
                        exit: 'inc',
                        after: {
                            '10': {
                                target: 'randomNumber',
                            },
                        },
                    },
                    assigningScore: {
                        entry: 'assignScore',
                        exit: 'inc',
                        after: {
                            '10': {
                                target: 'assigningPossibleMoves',
                            },
                        },
                    },
                    assigningPossibleMoves: {
                        entry: 'assignPossibleMoves',
                        exit: 'inc',
                        always: [
                            {
                                cond: 'canMoveAny',
                                target: 'fixed',
                            },
                            {
                                target: '#gameOver',
                            },
                        ],
                    },
                    randomNumber: {
                        entry: 'addRandomNumber',
                        exit: 'inc',
                        after: {
                            '10': {
                                target: 'assignMoves',
                            },
                        },
                    },
                    assignMoves: {
                        entry: 'addMoves',
                        exit: 'inc',
                        after: {
                            '10': {
                                target: 'assigningScore',
                            },
                        },
                    },
                },
            },
            gameOver: {
                id: 'gameOver',
                entry: 'stopGame',
                exit: 'inc',
                on: {
                    RINIT_GAME: {
                        target: 'firstRandom',
                    },
                },
            },
        },
    }, {
        actions: {
            createBoard: actions_1.createBoard,
            addRandomNumber: actions_1.addRandomNumber,
            assignPossibleMoves: actions_1.assignPossibleMoves,
            addMoves: actions_1.addMoves,
            moveDownTemp: actions_1.moveDownTemp,
            moveUpTemp: actions_1.moveUpTemp,
            moveLeftTemp: actions_1.moveLeftTemp,
            moveRightTemp: actions_1.moveRightTemp,
            move: actions_1.move,
            stopGame: () => { },
            assignScore: () => { },
            inc: actions_1.inc,
        },
        guards: {
            canMoveAny: guards_1.canMoveAny,
            canMove: guards_1.canMove,
        },
    });
}
exports.gameMachine = gameMachine;
// tsTypes: {} as import('./machine.typegen').Typegen0,
//   schema: {
//     context: {} as TContext,
//   },
// context: {
//   board: Array.from({ length: 4 * 4 }).fill(undefined) as Board,
//   boardSide: 4,
//   iterator: 0,
//   moves: 0,
//   score: 0,
// },
