"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
const MissingParamError_1 = require("../../app/errors/MissingParamError");
const zod_1 = require("zod");
class Address {
    constructor(props) {
        const newUser = this.handle(props);
        if (newUser.statusCode >= 300) {
            throw newUser.body;
        }
        this.props = newUser.body;
    }
    handle(props) {
        const { isValid, body, statusCode } = this.isValid(props);
        if (!isValid) {
            return {
                body: body,
                statusCode: statusCode,
            };
        }
        return {
            body: props,
            statusCode: 200,
        };
    }
    isValid(params) {
        const addressSchema = zod_1.z.object({
            cep: zod_1.z.string(),
            complement: zod_1.z.string(),
        });
        const userIsValid = addressSchema.safeParse(params);
        if (!userIsValid.success) {
            const errorPath = userIsValid.error.errors[0].path[0].toString();
            return {
                isValid: false,
                body: new MissingParamError_1.MissingParamError(errorPath),
                statusCode: 400,
            };
        }
        return {
            isValid: true,
            body: null,
            statusCode: 200,
        };
    }
}
exports.Address = Address;
//# sourceMappingURL=Addres.js.map