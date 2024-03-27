declare global {
  function print(msg: any): void

  namespace global {
    function id(): string
    function runid(): string
    function print(msg: any): void
  }
}

export default global
