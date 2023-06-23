import { BadRequestException } from '@nestjs/common';
export declare class InvalidParamError extends BadRequestException {
    constructor(param: string);
}
