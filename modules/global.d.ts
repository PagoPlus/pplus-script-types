declare function print(msg: any): void

declare namespace global {
  function id(): string
  function runid(): string
  function print(msg: any): void
}
