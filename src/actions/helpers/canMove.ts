import { Board } from '../../context';

export function _canMove(before: Board, after: Board): boolean {
  return JSON.stringify(before) !== JSON.stringify(after);
}

type CanMoveAllArgs = {
  before: Board;
  left: Board;
  right: Board;
  up: Board;
  down: Board;
};

export function _canMoveAll(args: CanMoveAllArgs): boolean {
  const _func = (arg: Board) => _canMove(args.before, arg);
  const canMoveLeft = _func(args.left);
  const canMoveRight = _func(args.right);
  const canMoveUp = _func(args.up);
  const canMoveDown = _func(args.down);
  return canMoveLeft || canMoveRight || canMoveUp || canMoveDown;
}
