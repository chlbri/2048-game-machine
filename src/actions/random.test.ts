import { ttest } from '@bemedev/test';
import { getEmptyPlaces } from './helpers/getEmptyPlaces';
import { cards1 } from './helpers/setupTests';
import { _addRandomNumber } from './random';

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
