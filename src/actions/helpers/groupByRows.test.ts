import { ttest } from '@bemedev/test';
import { groupByRows } from './groupByRows';

describe('groupByRows', () => {
  ttest.concurrent({
    func: groupByRows,
    tests: [
      {
        args: [2, [2, 8, 4, 16]],
        expected: [
          [2, 8],
          [4, 16],
        ],
      },
      {
        args: [3, [32, 64, 4, 16]],
        throws: true,
      },
      {
        args: [2, [undefined, 64, 4, 16]],
        expected: [
          [undefined, 64],
          [4, 16],
        ],
      },
    ],
  });
});
