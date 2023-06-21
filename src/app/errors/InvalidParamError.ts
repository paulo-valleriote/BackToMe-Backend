import { BadRequestException } from '@nestjs/common';

export class InvalidParamError extends BadRequestException {
  constructor(param: string) {
    super(`${param} - is not a valid parameter`, {
      cause: Error(),
    });
  }
}
