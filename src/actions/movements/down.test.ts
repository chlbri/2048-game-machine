import { ttest } from '@bemedev/test';
import { cards1 } from '../helpers/setupTests';
import { _moveDown } from './down';

describe('Move Up', () => {
  // #region Board Tests
  const test1 = {
    args: [4, cards1] as Parameters<typeof _moveDown>,
    expected: [
      undefined,
      undefined,
      undefined,
      undefined,
      16,
      undefined,
      undefined,
      undefined,
      16,
      undefined,
      undefined,
      4,
      2,
      8,
      8,
      8,
    ],
  };

  // #endregion
  ttest({
    func: _moveDown,
    tests: [test1],
  });
});
