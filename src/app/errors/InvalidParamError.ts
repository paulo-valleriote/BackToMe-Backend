export class InvalidParamError extends Error {
  constructor(param: string) {
    super(`${param} - is not a valid parameter`);
  }
}
