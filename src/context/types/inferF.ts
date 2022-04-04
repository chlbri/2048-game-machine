import type { TypeOf } from 'zod';

export type inferF<F extends (...args: any[] | never) => any> = TypeOf<
  ReturnType<F>
>;
