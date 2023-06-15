export class MissingParamError extends Error {
  constructor(param: string) {
    super(`${param} - is required and not been provided`);
  }
}
