type NotArray<X extends any> =
    X extends any[] ? never : X;

declare function print<T extends any>(msg: NotArray<T>): void;

declare namespace global {
  function id(): string;
  function runid(): string;
  function print<T extends any>(msg: NotArray<T>): void;
}