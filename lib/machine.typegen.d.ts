export interface Typegen0 {
    '@@xstate/typegen': true;
    eventsCausingActions: {
        createBoard: 'START';
        moveUpTemp: 'MOVE.UP';
        moveDownTemp: 'MOVE.DOWN';
        moveLeftTemp: 'MOVE.LEFT';
        moveRightTemp: 'MOVE.RIGHT';
        move: 'xstate.after(50)#gameMachine.gameStarted.checkingMoves';
        inc: 'xstate.init';
        addRandomNumber: 'START' | 'RINIT_GAME' | 'xstate.after(50)#gameMachine.firstRandom' | 'xstate.after(10)#gameMachine.gameStarted.moving';
        assignScore: 'xstate.after(10)#gameMachine.gameStarted.assignMoves';
        assignPossibleMoves: 'xstate.after(10)#gameMachine.gameStarted.assigningScore';
        addMoves: 'xstate.after(10)#gameMachine.gameStarted.randomNumber';
        stopGame: '';
    };
    internalEvents: {
        'xstate.after(50)#gameMachine.gameStarted.checkingMoves': {
            type: 'xstate.after(50)#gameMachine.gameStarted.checkingMoves';
        };
        'xstate.after(50)#gameMachine.firstRandom': {
            type: 'xstate.after(50)#gameMachine.firstRandom';
        };
        'xstate.after(10)#gameMachine.gameStarted.moving': {
            type: 'xstate.after(10)#gameMachine.gameStarted.moving';
        };
        'xstate.after(10)#gameMachine.gameStarted.assignMoves': {
            type: 'xstate.after(10)#gameMachine.gameStarted.assignMoves';
        };
        'xstate.after(10)#gameMachine.gameStarted.randomNumber': {
            type: 'xstate.after(10)#gameMachine.gameStarted.randomNumber';
        };
        'xstate.after(10)#gameMachine.gameStarted.assigningScore': {
            type: 'xstate.after(10)#gameMachine.gameStarted.assigningScore';
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
        canMove: 'xstate.after(50)#gameMachine.gameStarted.checkingMoves';
        canMoveAny: '';
    };
    eventsCausingDelays: {};
    matchesStates: 'idle' | 'firstRandom' | 'secondRandom' | 'gameStarted' | 'gameStarted.fixed' | 'gameStarted.checkingMoves' | 'gameStarted.moving' | 'gameStarted.assigningScore' | 'gameStarted.assigningPossibleMoves' | 'gameStarted.randomNumber' | 'gameStarted.assignMoves' | 'gameOver' | {
        gameStarted?: 'fixed' | 'checkingMoves' | 'moving' | 'assigningScore' | 'assigningPossibleMoves' | 'randomNumber' | 'assignMoves';
    };
    tags: never;
}
