"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MissingParamError = void 0;
const common_1 = require("@nestjs/common");
class MissingParamError extends common_1.BadRequestException {
    constructor(param) {
        super(`${param} - é obrigatório e não foi informado`, {
            cause: Error(),
        });
    }
}
exports.MissingParamError = MissingParamError;
//# sourceMappingURL=MissingParamError.js.map