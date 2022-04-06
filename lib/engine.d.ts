export declare const engine: import("xstate").StateMachine<{
    statistics?: {} | undefined;
    iterator: number;
    moves: number;
    score: number;
    board: (number | undefined)[];
    boardSide: number;
    _tempBoards: {
        left: (number | undefined)[];
        right: (number | undefined)[];
        up: (number | undefined)[];
        down: (number | undefined)[];
        next: (number | undefined)[];
    };
}, any, {
    type: "MOVE.UP" | "MOVE.DOWN" | "MOVE.LEFT" | "MOVE.RIGHT" | "START";
} | import("./events").CHANGE_BOARDSIDE_EVENT, {
    value: any;
    context: {
        statistics?: {} | undefined;
        iterator: number;
        moves: number;
        score: number;
        board: (number | undefined)[];
        boardSide: number;
        _tempBoards: {
            left: (number | undefined)[];
            right: (number | undefined)[];
            up: (number | undefined)[];
            down: (number | undefined)[];
            next: (number | undefined)[];
        };
    };
}, import("xstate").BaseActionObject, import("xstate").ServiceMap, import("./engine.typegen").Typegen0 & {
    indexedActions: import("xstate").IndexByType<import("xstate").BaseActionObject>;
    indexedEvents: import("xstate").IndexByType<{
        type: "MOVE.UP" | "MOVE.DOWN" | "MOVE.LEFT" | "MOVE.RIGHT" | "START";
    } | import("./events").CHANGE_BOARDSIDE_EVENT> & Pick<{
        'xstate.after(20)#engine.started.checkingMoves': {
            type: "xstate.after(20)#engine.started.checkingMoves";
        };
        'xstate.after(10)#engine.boardCreation.randomNumbers.first': {
            type: "xstate.after(10)#engine.boardCreation.randomNumbers.first";
        };
        'xstate.after(10)#engine.started.moving': {
            type: "xstate.after(10)#engine.started.moving";
        };
        'xstate.after(10)#engine.boardCreation.randomNumbers.second': {
            type: "xstate.after(10)#engine.boardCreation.randomNumbers.second";
        };
        'xstate.after(10)#engine.started.assignMoves': {
            type: "xstate.after(10)#engine.started.assignMoves";
        };
        'xstate.after(10)#engine.started.randomNumber': {
            type: "xstate.after(10)#engine.started.randomNumber";
        };
        'xstate.after(10)#engine.started.assigningScore': {
            type: "xstate.after(10)#engine.started.assigningScore";
        };
        '': {
            type: "";
        };
        'xstate.init': {
            type: "xstate.init";
        };
    }, "" | "xstate.after(20)#engine.started.checkingMoves" | "xstate.init" | "xstate.after(10)#engine.boardCreation.randomNumbers.first" | "xstate.after(10)#engine.started.moving" | "xstate.after(10)#engine.boardCreation.randomNumbers.second" | "xstate.after(10)#engine.started.assignMoves" | "xstate.after(10)#engine.started.assigningScore" | "xstate.after(10)#engine.started.randomNumber">;
}>;
