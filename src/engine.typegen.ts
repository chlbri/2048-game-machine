// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true;
  eventsCausingActions: {
    changeBoardSide: 'CHANGE_BOARDSIDE';
    inc: 'CHANGE_BOARDSIDE' | 'RESTART';
    rinitScore: 'CHANGE_BOARDSIDE' | 'RESTART';
    rinitMoves: 'CHANGE_BOARDSIDE' | 'RESTART';
    moveUpTemp: 'MOVE.UP';
    moveDownTemp: 'MOVE.DOWN';
    moveLeftTemp: 'MOVE.LEFT';
    moveRightTemp: 'MOVE.RIGHT';
    move: '';
    createBoard: 'xstate.init';
    addRandomNumber:
      | 'xstate.after(10)#engine.boardCreation.randomNumbers.first'
      | '';
    startGame: 'xstate.after(10)#engine.boardCreation.randomNumbers.second';
    score: '';
    assignPossibleMoves: '';
    updateGame: '';
    addMoves: '';
    stopGame: '';
  };
  internalEvents: {
    '': { type: '' };
    'xstate.after(10)#engine.boardCreation.randomNumbers.first': {
      type: 'xstate.after(10)#engine.boardCreation.randomNumbers.first';
    };
    'xstate.after(10)#engine.boardCreation.randomNumbers.second': {
      type: 'xstate.after(10)#engine.boardCreation.randomNumbers.second';
    };
    'xstate.init': { type: 'xstate.init' };
  };
  invokeSrcNameMap: {};
  missingImplementations: {
    actions: never;
    services: never;
    guards: never;
    delays: never;
  };
  eventsCausingServices: {};
  eventsCausingGuards: {
    canMove: '';
    canMoveAny: '';
  };
  eventsCausingDelays: {};
  matchesStates:
    | 'idle'
    | 'boardCreation'
    | 'boardCreation.initialization'
    | 'boardCreation.randomNumbers'
    | 'boardCreation.randomNumbers.first'
    | 'boardCreation.randomNumbers.second'
    | 'starting'
    | 'started'
    | 'started.fixed'
    | 'started.checkingMoves'
    | 'started.moving'
    | 'started.assigningScore'
    | 'started.assigningPossibleMoves'
    | 'started.nextMove'
    | 'started.randomNumber'
    | 'started.assignMoves'
    | 'gameOver'
    | {
        boardCreation?:
          | 'initialization'
          | 'randomNumbers'
          | { randomNumbers?: 'first' | 'second' };
        started?:
          | 'fixed'
          | 'checkingMoves'
          | 'moving'
          | 'assigningScore'
          | 'assigningPossibleMoves'
          | 'nextMove'
          | 'randomNumber'
          | 'assignMoves';
      };
  tags: never;
}
