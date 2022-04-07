"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.engine = void 0;
const Machine_1 = require("xstate/lib/Machine");
const actions_1 = require("./actions");
const context_1 = require("./context");
const guards_1 = require("./guards");
exports.engine = (0, Machine_1.createMachine)({
    id: 'engine',
    context: {
        board: [],
        boardSide: context_1.boardSideSchema.parse(4),
        iterator: 0,
        moves: 0,
        score: 0,
        _tempBoards: {
            down: [],
            up: [],
            left: [],
            right: [],
            next: [],
        },
    },
    tsTypes: {},
    schema: {
        context: {},
        events: {},
    },
    initial: 'idle',
    states: {
        idle: {
            exit: 'inc',
            description: 'État initial',
            on: {
                START: {
                    target: 'boardCreation',
                    description: 'Démarre la machine',
                },
                CHANGE_BOARDSIDE: {
                    actions: 'changeBoardSide',
                    description: 'Change la taille de la carte',
                },
            },
        },
        boardCreation: {
            description: 'Création de la carte du jeu',
            initial: 'initialization',
            states: {
                initialization: {
                    entry: 'createBoard',
                    exit: 'inc',
                    description: 'Initialisation de la carte',
                    after: {
                        '20': {
                            target: 'randomNumbers',
                        },
                    },
                },
                randomNumbers: {
                    description: 'Ajout des 2 premiers nombres aléatoires',
                    initial: 'first',
                    states: {
                        first: {
                            entry: 'addRandomNumber',
                            description: 'Premier nombre',
                            exit: 'inc',
                            after: {
                                '10': {
                                    target: 'second',
                                },
                            },
                        },
                        second: {
                            entry: 'addRandomNumber',
                            exit: ['inc'],
                            description: 'Second nombre',
                            after: {
                                '10': {
                                    target: '#starting',
                                },
                            },
                        },
                    },
                },
            },
        },
        starting: {
            id: 'starting',
            entry: 'startGame',
            description: 'Démarrage du jeu',
            exit: 'inc',
            after: {
                '50': {
                    target: '#started',
                },
            },
        },
        started: {
            initial: 'assigningPossibleMoves',
            id: 'started',
            description: 'Vous pouvez jouer',
            on: {
                CHANGE_BOARDSIDE: {
                    actions: 'changeBoardSide',
                    description: 'Change la taille de la carte',
                    target: 'boardCreation',
                },
            },
            states: {
                fixed: {
                    exit: 'inc',
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
                        '20': [
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
                    entry: 'score',
                    exit: 'inc',
                    description: 'Beautifull formula',
                    after: {
                        '10': {
                            target: 'assigningPossibleMoves',
                        },
                    },
                },
                assigningPossibleMoves: {
                    entry: 'assignPossibleMoves',
                    exit: 'inc',
                    always: 'nextMove',
                },
                nextMove: {
                    exit: 'inc',
                    entry: ['updateGame'],
                    always: [
                        {
                            cond: 'canMoveAny',
                            target: 'fixed',
                        },
                        '#gameOver',
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
            entry: ['stopGame'],
            exit: ['inc'],
            description: 'Oh non ! Vous avez perdu',
            on: {
                START: {
                    target: 'boardCreation',
                    description: 'Réinitialise le jeu',
                },
                CHANGE_BOARDSIDE: {
                    actions: 'changeBoardSide',
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
        stopGame: actions_1.stopGame,
        startGame: actions_1.startGame,
        changeBoardSide: actions_1.changeBoardSide,
        score: actions_1.score,
        inc: actions_1.inc,
        updateGame: actions_1.updateGame,
    },
    guards: {
        canMoveAny: guards_1.canMoveAny,
        canMove: guards_1.canMove,
    },
});
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
