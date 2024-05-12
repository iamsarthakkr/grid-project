export type Callback = () => void;
export type Callback1<A> = (arg: A) => void;
export type Callback2<A, B> = (arg1: A, arg2: B) => void;

export type Provider<T> = () => T;
export type Provider1<T, A> = (arg: A) => T;
export type Provider2<T, A, B> = (arg1: A, arg2: B) => T;

export type Action = Callback;
export type Action1<A> = Callback1<A>;
export type Action2<A, B> = Callback2<A, B>;
