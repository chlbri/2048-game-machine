export declare const gameMachine: import("xstate").StateMachine<{
    statistics?: {} | undefined;
    board: (number | undefined)[];
    _tempBoards: {
        left: (number | undefined)[];
        right: (number | undefined)[];
        up: (number | undefined)[];
        down: (number | undefined)[];
        next: (number | undefined)[];
    };
    boardSide: number;
    moves: number;
    score: number;
    iterator: number;
}, any, import("./events").CHANGE_BOARDSIDE_EVENT | {
    type: "START" | "MOVE.UP" | "MOVE.DOWN" | "MOVE.LEFT" | "MOVE.RIGHT";
}, {
    value: any;
    context: {
        statistics?: {} | undefined;
        board: (number | undefined)[];
        _tempBoards: {
            left: (number | undefined)[];
            right: (number | undefined)[];
            up: (number | undefined)[];
            down: (number | undefined)[];
            next: (number | undefined)[];
        };
        boardSide: number;
        moves: number;
        score: number;
        iterator: number;
    };
}, import("xstate").BaseActionObject, import("xstate").ServiceMap, import("./machine.typegen").Typegen0 & {
    indexedActions: import("xstate").IndexByType<import("xstate").BaseActionObject>;
    indexedEvents: import("xstate").IndexByType<import("./events").CHANGE_BOARDSIDE_EVENT | {
        type: "START" | "MOVE.UP" | "MOVE.DOWN" | "MOVE.LEFT" | "MOVE.RIGHT";
    }> & Pick<{
        'xstate.after(20)#gameMachine.started.checkingMoves': {
            type: "xstate.after(20)#gameMachine.started.checkingMoves";
        };
        'xstate.after(10)#gameMachine.boardCreation.randomNumbers.first': {
            type: "xstate.after(10)#gameMachine.boardCreation.randomNumbers.first";
        };
        'xstate.after(10)#gameMachine.started.moving': {
            type: "xstate.after(10)#gameMachine.started.moving";
        };
        'xstate.after(10)#gameMachine.boardCreation.randomNumbers.second': {
            type: "xstate.after(10)#gameMachine.boardCreation.randomNumbers.second";
        };
        'xstate.after(10)#gameMachine.started.assignMoves': {
            type: "xstate.after(10)#gameMachine.started.assignMoves";
        };
        'xstate.after(10)#gameMachine.started.randomNumber': {
            type: "xstate.after(10)#gameMachine.started.randomNumber";
        };
        '': {
            type: "";
        };
        'xstate.after(10)#gameMachine.started.assigningScore': {
            type: "xstate.after(10)#gameMachine.started.assigningScore";
        };
        'xstate.init': {
            type: "xstate.init";
        };
    }, "" | "xstate.after(20)#gameMachine.started.checkingMoves" | "xstate.init" | "xstate.after(10)#gameMachine.boardCreation.randomNumbers.first" | "xstate.after(10)#gameMachine.started.moving" | "xstate.after(10)#gameMachine.boardCreation.randomNumbers.second" | "xstate.after(10)#gameMachine.started.assignMoves" | "xstate.after(10)#gameMachine.started.assigningScore" | "xstate.after(10)#gameMachine.started.randomNumber">;
}>;
