export interface Typegen0 {
    '@@xstate/typegen': true;
    eventsCausingActions: {
        changeBoardSide: 'CHANGE_BOARDSIDE';
        moveUpTemp: 'MOVE.UP';
        moveDownTemp: 'MOVE.DOWN';
        moveLeftTemp: 'MOVE.LEFT';
        moveRightTemp: 'MOVE.RIGHT';
        move: 'xstate.after(20)#engine.started.checkingMoves';
        inc: 'xstate.init';
        createBoard: 'xstate.init';
        addRandomNumber: 'xstate.after(10)#engine.boardCreation.randomNumbers.first' | 'xstate.after(10)#engine.started.moving';
        startGame: 'xstate.after(10)#engine.boardCreation.randomNumbers.second';
        score: 'xstate.after(10)#engine.started.assignMoves';
        assignPossibleMoves: 'xstate.after(10)#engine.started.assigningScore';
        updateGame: '';
        addMoves: 'xstate.after(10)#engine.started.randomNumber';
        stopGame: '';
    };
    internalEvents: {
        'xstate.after(20)#engine.started.checkingMoves': {
            type: 'xstate.after(20)#engine.started.checkingMoves';
        };
        'xstate.after(10)#engine.boardCreation.randomNumbers.first': {
            type: 'xstate.after(10)#engine.boardCreation.randomNumbers.first';
        };
        'xstate.after(10)#engine.started.moving': {
            type: 'xstate.after(10)#engine.started.moving';
        };
        'xstate.after(10)#engine.boardCreation.randomNumbers.second': {
            type: 'xstate.after(10)#engine.boardCreation.randomNumbers.second';
        };
        'xstate.after(10)#engine.started.assignMoves': {
            type: 'xstate.after(10)#engine.started.assignMoves';
        };
        'xstate.after(10)#engine.started.randomNumber': {
            type: 'xstate.after(10)#engine.started.randomNumber';
        };
        'xstate.after(10)#engine.started.assigningScore': {
            type: 'xstate.after(10)#engine.started.assigningScore';
        };
        '': {
            type: '';
        };
        'xstate.init': {
            type: 'xstate.init';
        };
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
        canMove: 'xstate.after(20)#engine.started.checkingMoves';
        canMoveAny: '';
    };
    eventsCausingDelays: {};
    matchesStates: 'idle' | 'boardCreation' | 'boardCreation.initialization' | 'boardCreation.randomNumbers' | 'boardCreation.randomNumbers.first' | 'boardCreation.randomNumbers.second' | 'starting' | 'started' | 'started.fixed' | 'started.checkingMoves' | 'started.moving' | 'started.assigningScore' | 'started.assigningPossibleMoves' | 'started.nextMove' | 'started.randomNumber' | 'started.assignMoves' | 'gameOver' | {
        boardCreation?: 'initialization' | 'randomNumbers' | {
            randomNumbers?: 'first' | 'second';
        };
        started?: 'fixed' | 'checkingMoves' | 'moving' | 'assigningScore' | 'assigningPossibleMoves' | 'nextMove' | 'randomNumber' | 'assignMoves';
    };
    tags: never;
}
