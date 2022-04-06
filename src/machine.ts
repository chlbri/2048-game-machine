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
  score,
  startGame,
  stopGame,
  updateGame
} from './actions';
import { boardSideSchema, TContext } from './context';
import { TEvent } from './events';
import { canMove, canMoveAny } from './guards';

export const gameMachine = createMachine(
  {
    id: 'gameMachine',
    context: {
      board: [],
      boardSide: boardSideSchema.parse(4),
      iterator: 0,
      moves: 0,
      score: 0,
    },

    tsTypes: {} as import('./machine.typegen').Typegen0,
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
        states: {
          fixed: {
            entry: ['updateGame'],
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
              10: {
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
