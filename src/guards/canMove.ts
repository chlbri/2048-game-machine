import { Board, boardSchema, BoardSide, TContext } from '../context';

export function _canMove(
  boardSide: BoardSide,
  before: Board,
  after: Board,
): boolean {
  return (
    JSON.stringify(before) !==
    JSON.stringify(boardSchema(boardSide).parse(after))
  );
}

export function canMove(ctx: TContext): boolean {
  return _canMove(ctx.boardSide, ctx.board, ctx._tempBoards.next);
}

export function canMoveAny(ctx: TContext): boolean {
  const _func = (arg: Board) => _canMove(ctx.boardSide, ctx.board, arg);
  const canMoveLeft = _func(ctx._tempBoards.left);
  const canMoveRight = _func(ctx._tempBoards.right);
  const canMoveUp = _func(ctx._tempBoards.up);
  const canMoveDown = _func(ctx._tempBoards.down);
  return canMoveLeft || canMoveRight || canMoveUp || canMoveDown;
}
