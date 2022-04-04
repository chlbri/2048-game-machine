import { Board } from "../../context";

export function createBoardTest(boardSide: BoardSide,actual: Board, expected: Board) {
  return {
    args: ,
    expected,
  };
}

export const compare = (arg1: Board, arg2: any) => {
  return JSON.stringify(arg1) === JSON.stringify(arg2);
};
