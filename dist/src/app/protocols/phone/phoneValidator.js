"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneValidator = void 0;
const zod_1 = require("zod");
class PhoneValidator {
    execute(phone) {
        const phoneSchema = zod_1.z
            .string()
            .min(9)
            .refine((phone) => phone.trim().replace(' ', ''));
        const phoneIsValid = phoneSchema.safeParse(phone);
        if (!phoneIsValid.success) {
            return false;
        }
        return phoneIsValid.data;
    }
}
exports.PhoneValidator = PhoneValidator;
//# sourceMappingURL=phoneValidator.js.map