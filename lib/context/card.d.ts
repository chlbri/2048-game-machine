import { z } from 'zod';
declare const value: z.ZodOptional<z.ZodEffects<z.ZodNumber, number, number>>;
export declare const cardSchema: z.ZodObject<{
    value: z.ZodOptional<z.ZodEffects<z.ZodNumber, number, number>>;
    merged: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    value?: number | undefined;
    merged: boolean;
}, {
    value?: number | undefined;
    merged: boolean;
}>;
export declare type MoveArray = z.infer<typeof value>[];
export declare type CardType = z.infer<typeof cardSchema>;
export declare type ValueCard = z.infer<typeof value>;
export { value as cardValueSchema };
export declare class Card implements Omit<CardType, 'merged'> {
    value: ValueCard;
    private merged;
    constructor(value?: ValueCard);
    rinit(): void;
    canMergeSibling(card: Card): boolean;
    get isEmpty(): boolean;
    get isMerged(): boolean;
    merge(): void;
    assignSibling(card: Card): void;
    addSibling(card: Card): void;
    toObject(): {
        merged: boolean;
        value: number | undefined;
    };
    static default: Card;
}
