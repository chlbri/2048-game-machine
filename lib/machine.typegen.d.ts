export interface Typegen0 {
    '@@xstate/typegen': true;
    eventsCausingActions: {
        changeBoardSide: 'CHANGE_BOARDSIDE';
        moveUpTemp: 'MOVE.UP';
        moveDownTemp: 'MOVE.DOWN';
        moveLeftTemp: 'MOVE.LEFT';
        moveRightTemp: 'MOVE.RIGHT';
        move: 'xstate.after(20)#gameMachine.started.checkingMoves';
        inc: 'xstate.init';
        createBoard: 'xstate.init';
        addRandomNumber: 'xstate.after(10)#gameMachine.boardCreation.randomNumbers.first' | 'xstate.after(10)#gameMachine.started.moving';
        startGame: 'xstate.after(10)#gameMachine.boardCreation.randomNumbers.second';
        updateGame: 'xstate.after(20)#gameMachine.started.checkingMoves' | '';
        score: 'xstate.after(10)#gameMachine.started.assignMoves';
        assignPossibleMoves: 'xstate.after(10)#gameMachine.started.assigningScore';
        addMoves: 'xstate.after(10)#gameMachine.started.randomNumber';
        stopGame: '';
    };
    internalEvents: {
        'xstate.after(20)#gameMachine.started.checkingMoves': {
            type: 'xstate.after(20)#gameMachine.started.checkingMoves';
        };
        'xstate.after(10)#gameMachine.boardCreation.randomNumbers.first': {
            type: 'xstate.after(10)#gameMachine.boardCreation.randomNumbers.first';
        };
        'xstate.after(10)#gameMachine.started.moving': {
            type: 'xstate.after(10)#gameMachine.started.moving';
        };
        'xstate.after(10)#gameMachine.boardCreation.randomNumbers.second': {
            type: 'xstate.after(10)#gameMachine.boardCreation.randomNumbers.second';
        };
        'xstate.after(10)#gameMachine.started.assignMoves': {
            type: 'xstate.after(10)#gameMachine.started.assignMoves';
        };
        'xstate.after(10)#gameMachine.started.randomNumber': {
            type: 'xstate.after(10)#gameMachine.started.randomNumber';
        };
        '': {
            type: '';
        };
        'xstate.after(10)#gameMachine.started.assigningScore': {
            type: 'xstate.after(10)#gameMachine.started.assigningScore';
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
        canMove: 'xstate.after(20)#gameMachine.started.checkingMoves';
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
