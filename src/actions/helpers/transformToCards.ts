import { Card, MoveArray } from '../../context';

export function transformToCards(...moveArray: MoveArray) {
  return moveArray.map((value) => {
    return new Card(
      value,
    );
  });
}
