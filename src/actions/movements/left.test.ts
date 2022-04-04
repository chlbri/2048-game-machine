import { ttest } from '@bemedev/test';
import { cards1 } from '../helpers/setupTests';
import { _moveLeft } from './left';

describe('Move Up', () => {
  // #region Board Tests
  const test1 = {
    args: [4, cards1] as Parameters<typeof _moveLeft>,
    expected: [
      16,
      8,
      2,
      undefined,
      8,
      2,
      undefined,
      undefined,
      8,
      4,
      8,
      undefined,
      2,
      4,
      undefined,
      undefined,
    ],
  };

  // #endregion
  ttest({
    func: _moveLeft,
    tests: [test1],
  });
});
