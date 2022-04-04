import { z } from 'zod';

const value = z
  .number()
  .refine(arg => !(arg & (arg - 1)) && arg >= 2)
  .optional();

export const cardSchema = z.object({
  value,
  merged: z.boolean(),
});

export type MoveArray = z.infer<typeof value>[];

export type CardType = z.infer<typeof cardSchema>;

// type position

export type ValueCard = z.infer<typeof value>;

export { value as cardValueSchema };

export class Card implements Omit<CardType, 'merged'> {
  public value: ValueCard;
  private merged = false;

  constructor(value?: ValueCard) {
    this.value = value;
  }

  rinit() {
    this.value = undefined;
  }

  canMergeSibling(card: Card) {
    return !!this.value && !this.merged && this.value === card.value;
  }

  get isEmpty(): boolean {
    return !this.value;
  }

  get isMerged(): boolean {
    return this.merged;
  }

  merge() {
    this.merged = true;
  }

  assignSibling(card: Card) {
    this.value = card.value;
  }

  addSibling(card: Card) {
    const adding = card.value;
    if (adding) {
      this.value = (this.value ?? 0) + adding;
    }
  }

  toObject() {
    return {
      merged: this.merged,
      value: this.value,
    };
  }
  static default = new Card();
}
