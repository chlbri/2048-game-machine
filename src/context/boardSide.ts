import { z } from 'zod';

export const boardSideSchema = z
  .number()
  .int()
  .gte(4, {
    message: 'Must be superior or equals to "4"',
  })
  .lte(8, {
    message: 'Must be inferior or equals to "8"',
  });

export type BoardSide = z.infer<typeof boardSideSchema>;
