import { z } from 'zod';
export declare const boardSideSchema: z.ZodUnion<[z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>]>;
export declare type BoardSide = z.infer<typeof boardSideSchema>;
