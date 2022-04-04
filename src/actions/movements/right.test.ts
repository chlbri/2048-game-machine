import { ttest } from '@bemedev/test';
import { cards1 } from '../helpers/setupTests';
import { _moveRight } from './right';

describe('Move Up', () => {
  // #region Board Tests
  const test1 = {
    args: [4, cards1] as Parameters<typeof _moveRight>,
    expected: [
      undefined,
      16,
      8,
      2,
      undefined,
      undefined,
      8,
      2,
      undefined,
      8,
      4,
      8,
      undefined,
      undefined,
      2,
      4,
    ],
  };

  // #endregion
  ttest({
    func: _moveRight,
    tests: [test1],
  });
});
