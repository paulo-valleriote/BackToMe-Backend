"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidParamError = void 0;
const common_1 = require("@nestjs/common");
class InvalidParamError extends common_1.BadRequestException {
    constructor(param) {
        super(`${param} - não é um parâmetro válido`, {
            cause: Error(),
        });
    }
}
exports.InvalidParamError = InvalidParamError;
//# sourceMappingURL=InvalidParamError.js.map