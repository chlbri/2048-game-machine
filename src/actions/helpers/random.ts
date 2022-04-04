// import { assign } from '@xstate/immer';
import { assign } from '@xstate/immer';
import { Board } from '../../context';
import { TContext } from '../../context/context';
import { getEmptyPlaces } from './getEmptyPlaces';

export function nextNumber() {
  const rand = Math.random();
  return rand < 0.7 ? 2 : 4;
}

export const _addRandomNumber = (board: Board) => {
  const _board = [...board];
  const emptyPlaces = getEmptyPlaces(_board);
  if (emptyPlaces.length < 1) return _board;
  const rand = Math.floor(Math.random() * (emptyPlaces.length - 1));
  _board[emptyPlaces[rand]] = nextNumber();
  return _board;
};

export const addRandomNumber = assign<TContext, any>(ctx => {
  ctx.board = _addRandomNumber(ctx.board);
});
