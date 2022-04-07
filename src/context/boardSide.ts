import { z } from 'zod';

export const boardSideSchema = z.union([
  z.literal(4),
  z.literal(5),
  z.literal(6),
]);

export type BoardSide = z.infer<typeof boardSideSchema>;
