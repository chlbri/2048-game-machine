import { z } from 'zod';

export const boardSideSchema = z
  .number()
  .int()
  .gte(3, {
    message: 'Must be superior or equals to "3"',
  })
  .lte(8, {
    message: 'Must be inferior or equals to "8"',
  });

export type BoardSide = z.infer<typeof boardSideSchema>;
