import { serve } from '@bemedev/fstate';
import { ttest } from '@bemedev/test';
import { Card } from '../../context';
import { machine, moveCards, TEvent } from './moveArray';
import { transformToCards } from './transformToCards';

describe('Machine', () => {
  const func = (context: TEvent) => serve(machine)(context);
  ttest({
    func,
    tests: [
      {
        args: {
          current: new Card(8),
          next: new Card(2),
        },
        expected: false,
      },
      {
        args: {
          current: new Card(2),
          next: new Card(2),
        },
        expected: true,
      },
      {
        args: {
          current: new Card(8),
          next: new Card(),
        },
        expected: true,
      },
    ],
    compare: (arg1, arg2) => arg1.moved === arg2,
  });
});

describe('MoveCards', () => {
  ttest({
    func: moveCards,
    tests: [
      {
        args: transformToCards(4, 4, 8, 8),
        expected: [undefined, undefined, 8, 16],
      },
      {
        args: transformToCards(2, 4, 8, 8),
        expected: [undefined, 2, 4, 16],
      },
      {
        args: transformToCards(undefined, 4, 2, 8),
        expected: [undefined, 4, 2, 8],
      },
      {
        args: transformToCards(4, 4, 2, 8),
        expected: [undefined, 8, 2, 8],
      },
      {
        args: transformToCards(2, 4, 2, 8),
        expected: [2, 4, 2, 8],
      },
      {
        args: transformToCards(undefined, 4, 8, 8, 32, 32),
        expected: [undefined, undefined, undefined, 4, 16, 64],
      },
    ],
  });
});
