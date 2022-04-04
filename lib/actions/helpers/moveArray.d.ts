import { Card, MoveArray } from '../../context';
export declare type TEvent = {
    current: Card;
    next: Card;
};
export declare type Context = {
    current: Card;
    next: Card;
    moved: boolean;
};
export declare const machine: import("@bemedev/fstate/machine").Machine<TEvent, {
    current: Card;
    next: Card;
    moved: boolean;
}, import("@bemedev/fstate").DFS<TEvent, {
    current: Card;
    next: Card;
    moved: boolean;
}, {
    type: "sync";
    transitions: {
        target: string;
        actions?: undefined;
    };
} | {
    type: "sync";
    transitions: {
        actions: string;
        target: string;
    };
} | {
    type: "sync";
    transitions: ({
        conditions: string;
        target: string;
    } | {
        target: string;
        conditions?: undefined;
    })[];
} | {
    type: "final";
    transitions?: undefined;
} | {
    type: "sync";
    transitions: {
        actions: string[];
        target: string;
    };
} | {
    type: "sync";
    transitions: ({
        conditions: string;
        actions: string;
        target: string;
    } | {
        conditions: string;
        actions: string[];
        target: string;
    } | {
        target: string;
        conditions?: undefined;
        actions?: undefined;
    })[];
}>>;
export declare function moveCards(cards: Card[]): MoveArray;
