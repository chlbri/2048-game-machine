import { Board } from './../../context';

export function getEmptyPlaces(board: Board) {
  return (
    board.map((card, i) => [card, i]) as [number | undefined, number][]
  )
    .filter(([card]) => !card)
    .map(([, i]) => i);
}
