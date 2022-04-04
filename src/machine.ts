import { createMachine } from 'xstate/lib/Machine';

export const machine = createMachine({
  id: 'gameMachine',
  initial: 'idle',
  tsTypes: {} as import("./machine.typegen").Typegen0,
  states: {
    idle: {
      exit: 'inc',
      on: {
        START: {
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
          entry: 'deleteTempBoard',
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
              target: '#gameMachine.gameOver',
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
      entry: 'stopGame',
      exit: 'inc',
      on: {
        RINIT_GAME: {
          target: 'firstRandom',
        },
      },
    },
  },
});
