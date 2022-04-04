import { ttest } from '@bemedev/test';
import { groupByColumns } from './groupByColumns';

describe('groupByColumns', () => {
  ttest({
    func: groupByColumns,
    tests: [
      {
        args: [2, [2, 8, 4, 16]],
        expected: [
          [2, 4],
          [8, 16],
        ],
      },
      {
        args: [3, [32, 64, 4, 16]],
        throws: true,
      },
      {
        args: [2, [1, 4, 3, 16]],
        throws: true,
      },
      {
        args: [2, [undefined, 64, 4, 16]],
        expected: [
          [undefined, 4],
          [64, 16],
        ],
      },
    ],
  });
});
