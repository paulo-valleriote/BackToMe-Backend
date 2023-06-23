"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const InvalidParamError_1 = require("../../app/errors/InvalidParamError");
const MissingParamError_1 = require("../../app/errors/MissingParamError");
const makeHash_1 = require("../../app/protocols/crypto/hash/makeHash");
const Addres_1 = require("../Address/Addres");
const zod_1 = require("zod");
class User {
    constructor(props) {
        const { address } = props, userProps = __rest(props, ["address"]);
        const newUser = this.handle(userProps);
        if (address) {
            this.address = new Addres_1.Address(address);
        }
        if (newUser.statusCode >= 300) {
            throw newUser.body;
        }
        this.props = Object.assign(Object.assign({}, newUser.body), { password: (0, makeHash_1.makeHash)(newUser.body.password), address: this.address && this.address.props });
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
        const userSchema = zod_1.z.object({
            name: zod_1.z.string().min(3, { message: 'Invalid' }),
            email: zod_1.z.string().email().min(6, { message: 'Invalid' }),
            phone: zod_1.z.string().min(9, { message: 'Invalid' }),
            cpf: zod_1.z.string().length(11, { message: 'Invalid' }),
            password: zod_1.z.string().min(6, { message: 'Invalid' }),
        });
        const userIsValid = userSchema.safeParse(params);
        if (!userIsValid.success) {
            const errorPath = userIsValid.error.errors[0].path[0].toString();
            const errorMessage = userIsValid.error.errors[0].message;
            const errorBody = errorMessage === 'Invalid'
                ? new InvalidParamError_1.InvalidParamError(errorPath)
                : new MissingParamError_1.MissingParamError(errorPath);
            return {
                isValid: false,
                body: errorBody,
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
exports.User = User;
//# sourceMappingURL=User.js.map