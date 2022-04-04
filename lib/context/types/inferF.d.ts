import type { TypeOf } from 'zod';
export declare type inferF<F extends (...args: any[] | never) => any> = TypeOf<ReturnType<F>>;
