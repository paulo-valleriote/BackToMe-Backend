"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneValidator = void 0;
const zod_1 = require("zod");
class PhoneValidator {
    execute(phone) {
        const phoneRegex = new RegExp('^([1-9]{2}) (?:[2-8]|9[1-9])[0-9]{3}-[0-9]{4}$');
        const phoneSchema = zod_1.z.string().regex(phoneRegex);
        const phoneIsValid = phoneSchema.safeParse(phone);
        if (!phoneIsValid.success) {
            return false;
        }
        return phoneIsValid.data;
    }
}
exports.PhoneValidator = PhoneValidator;
//# sourceMappingURL=phoneValidator.js.map