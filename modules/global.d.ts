/** @noSelfInFile **/

declare global {
  function print(msg: any): void

  namespace globals {
    function id(): string
    function runid(): string
    function print(msg: any): void
  }
}

export default globals
