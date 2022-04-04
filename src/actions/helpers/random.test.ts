import { ttest } from '@bemedev/test';
import { getEmptyPlaces } from './getEmptyPlaces';
import { _addRandomNumber } from './random';
import { cards1 } from './setupTests';

describe('addRandomNumber', () => {
  ttest({
    func: _addRandomNumber,
    tests: [
      {
        args: cards1,
        expected: 4 as any,
      },
    ],
    compare: (arg1, arg2: any) => getEmptyPlaces(arg1).length === arg2,
  });
});
