import { BadRequestException } from '@nestjs/common';
export declare class MissingParamError extends BadRequestException {
    constructor(param: string);
}
