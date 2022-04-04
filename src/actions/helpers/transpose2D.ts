import { Chunks } from '../../context';

export function transpose2D(chunks: Chunks) {
  const out: Chunks = [];
  const side = chunks.length;

  //Add inner tabs to satisfy Typescript
  Array.from({ length: side }).forEach(() => out.push([]));

  for (let i = 0; i < side; i++) {
    for (let j = 0; j < side; j++) {
      out[i][j] = chunks[j][i];
      out[j][i] = chunks[i][j];
    }
  }

  return out;
}
