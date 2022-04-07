import { createMachine } from 'xstate/lib/Machine';
import {
  addMoves,
  addRandomNumber,
  assignPossibleMoves,
  changeBoardSide,
  createBoard,
  inc,
  move,
  moveDownTemp,
  moveLeftTemp,
  moveRightTemp,
  moveUpTemp,
  rinitMoves,
  rinitScore,
  score,
  startGame,
  stopGame,
  updateGame,
} from './actions';
import { boardSideSchema, TContext } from './context';
import { TEvent } from './events';
import { canMove, canMoveAny } from './guards';

export const engine = createMachine(
  {
    id: 'engine',
    context: {
      board: [],
      boardSide: boardSideSchema.parse(4),
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

    tsTypes: {} as import('./engine.typegen').Typegen0,
    schema: {
      context: {} as TContext,
      events: {} as TEvent,
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
            actions: [
              'inc',
              'rinitScore',
              'rinitMoves',
              'changeBoardSide',
            ],
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
            always: [
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

          moving: {
            exit: 'inc',
            always: 'randomNumber',
          },

          assigningScore: {
            entry: 'score',
            exit: 'inc',
            description: 'Beautifull formula',
            always: 'nextMove',
          },

          assigningPossibleMoves: {
            entry: 'assignPossibleMoves',
            exit: 'inc',
            always: 'assigningScore',
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
            always: 'assignMoves',
          },

          assignMoves: {
            entry: 'addMoves',
            exit: 'inc',
            always: 'assigningPossibleMoves',
          },
        },
      },

      gameOver: {
        id: 'gameOver',
        entry: ['stopGame'],
        exit: ['inc', 'rinitScore', 'rinitMoves'],
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
  },
  {
    actions: {
      createBoard,
      addRandomNumber,
      assignPossibleMoves,
      addMoves,
      moveDownTemp,
      moveUpTemp,
      moveLeftTemp,
      moveRightTemp,
      move,
      stopGame,
      startGame,
      changeBoardSide,
      score,
      inc,
      updateGame,
      rinitMoves,
      rinitScore,
    },
    guards: {
      canMoveAny,
      canMove,
    },
  },
);

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
