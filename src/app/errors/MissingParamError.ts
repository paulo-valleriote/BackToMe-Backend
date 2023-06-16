import { BadRequestException } from '@nestjs/common';

export class MissingParamError extends BadRequestException {
  constructor(param: string) {
    super(`${param} - is required and not been provided`, {
      cause: Error(),
    });
  }
}
