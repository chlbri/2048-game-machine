import { z } from 'zod';
export declare const boardSideSchema: z.ZodNumber;
export declare type BoardSide = z.infer<typeof boardSideSchema>;
