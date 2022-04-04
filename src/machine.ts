import { createMachine } from 'xstate/lib/Machine';
import {
  addMoves,
  addRandomNumber,
  assignPossibleMoves,
  createBoard,
  inc,
  move,
  moveDownTemp,
  moveLeftTemp,
  moveRightTemp,
  moveUpTemp,
} from './actions';
import { BoardSide, boardSideSchema, TContext } from './context';
import { TEvent } from './events';
import { canMove, canMoveAny } from './guards';

export function gameMachine(value: BoardSide) {
  const boardSide = boardSideSchema.parse(value);
  return createMachine(
    {
      id: 'gameMachine',
      context: {
        board: [],
        boardSide,
        iterator: 0,
        moves: 0,
        score: 0,
      },
      initial: 'idle',
      tsTypes: {} as import('./machine.typegen').Typegen0,
      schema: {
        context: {} as TContext,
        events: {} as TEvent,
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
        stopGame: () => {},
        assignScore: () => {},
        inc,
      },
      guards: {
        canMoveAny,
        canMove,
      },
    },
  );
}

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
