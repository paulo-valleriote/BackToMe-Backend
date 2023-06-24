"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
const InvalidParamError_1 = require("../../app/errors/InvalidParamError");
const MissingParamError_1 = require("../../app/errors/MissingParamError");
class Animal {
    constructor(propsValidationSchema) {
        this.propsValidationSchema = propsValidationSchema;
    }
    handle(httpRequest) {
        const body = this.propsValidationSchema.safeParse(httpRequest);
        if (!body.success) {
            const errorPath = body.error.errors[0].path[0].toLocaleString();
            throw new MissingParamError_1.MissingParamError(errorPath);
        }
        if (!this.ageValidator(httpRequest.age)) {
            throw new InvalidParamError_1.InvalidParamError(httpRequest.age);
        }
        return {
            body: body.data,
            statusCode: 200,
        };
    }
    ageValidator(age) {
        const validAges = ['Filhote', 'Adulto', 'Idoso'];
        if (!validAges.includes(age)) {
            return false;
        }
        return true;
    }
}
exports.Animal = Animal;
//# sourceMappingURL=Animal.js.map