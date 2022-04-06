import type { NOmit } from '@bemedev/types';
import { BoardSide, TContext } from '../context';
export declare type CHANGE_BOARDSIDE_EVENT = {
    type: 'CHANGE_BOARDSIDE';
    boardSide: BoardSide;
};
export declare type TEvent = {
    type: 'START' | 'MOVE.UP' | 'MOVE.DOWN' | 'MOVE.LEFT' | 'MOVE.RIGHT';
} | CHANGE_BOARDSIDE_EVENT;
export declare type ParentEvent = {
    type: 'GAME.START' | 'GAME.STOP';
} | ({
    type: 'GAME.UPDATE';
} & NOmit<TContext, 'boardSide' | 'iterator' | '_tempBoards'>);
