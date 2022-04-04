import { BoardSide } from './context';
import { TEvent } from './events';
export declare function gameMachine(value: BoardSide): import("xstate").StateMachine<{
    _tempBoards?: {
        left?: (number | undefined)[] | undefined;
        right?: (number | undefined)[] | undefined;
        up?: (number | undefined)[] | undefined;
        down?: (number | undefined)[] | undefined;
        next?: (number | undefined)[] | undefined;
    } | undefined;
    statistics?: {} | undefined;
    board: (number | undefined)[];
    boardSide: number;
    moves: number;
    score: number;
    iterator: number;
}, any, TEvent, {
    value: any;
    context: {
        _tempBoards?: {
            left?: (number | undefined)[] | undefined;
            right?: (number | undefined)[] | undefined;
            up?: (number | undefined)[] | undefined;
            down?: (number | undefined)[] | undefined;
            next?: (number | undefined)[] | undefined;
        } | undefined;
        statistics?: {} | undefined;
        board: (number | undefined)[];
        boardSide: number;
        moves: number;
        score: number;
        iterator: number;
    };
}, import("xstate").BaseActionObject, import("xstate").ServiceMap, import("./machine.typegen").Typegen0 & {
    indexedActions: import("xstate").IndexByType<import("xstate").BaseActionObject>;
    indexedEvents: import("xstate").IndexByType<TEvent> & Pick<{
        'xstate.after(50)#gameMachine.gameStarted.checkingMoves': {
            type: "xstate.after(50)#gameMachine.gameStarted.checkingMoves";
        };
        'xstate.after(50)#gameMachine.firstRandom': {
            type: "xstate.after(50)#gameMachine.firstRandom";
        };
        'xstate.after(10)#gameMachine.gameStarted.moving': {
            type: "xstate.after(10)#gameMachine.gameStarted.moving";
        };
        'xstate.after(10)#gameMachine.gameStarted.assignMoves': {
            type: "xstate.after(10)#gameMachine.gameStarted.assignMoves";
        };
        'xstate.after(10)#gameMachine.gameStarted.randomNumber': {
            type: "xstate.after(10)#gameMachine.gameStarted.randomNumber";
        };
        'xstate.after(10)#gameMachine.gameStarted.assigningScore': {
            type: "xstate.after(10)#gameMachine.gameStarted.assigningScore";
        };
        '': {
            type: "";
        };
        'xstate.init': {
            type: "xstate.init";
        };
    }, "" | "xstate.after(50)#gameMachine.gameStarted.checkingMoves" | "xstate.after(50)#gameMachine.firstRandom" | "xstate.after(10)#gameMachine.gameStarted.moving" | "xstate.after(10)#gameMachine.gameStarted.assignMoves" | "xstate.after(10)#gameMachine.gameStarted.randomNumber" | "xstate.after(10)#gameMachine.gameStarted.assigningScore" | "xstate.init">;
}>;
