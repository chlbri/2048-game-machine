import { Board, TContext } from '../context';

function _canMove(before: Board, after?: Board): boolean {
  return !after || JSON.stringify(before) !== JSON.stringify(after);
}
export function canMove(ctx: TContext): boolean {
  const before = ctx.board;
  const after = ctx._tempBoards?.next;
  return _canMove(before, after);
}

export function canMoveAny(ctx: TContext): boolean {
  const _func = (arg?: Board) => _canMove(ctx.board, arg);
  const canMoveLeft = _func(ctx._tempBoards?.left);
  const canMoveRight = _func(ctx._tempBoards?.right);
  const canMoveUp = _func(ctx._tempBoards?.up);
  const canMoveDown = _func(ctx._tempBoards?.down);
  return canMoveLeft || canMoveRight || canMoveUp || canMoveDown;
}
