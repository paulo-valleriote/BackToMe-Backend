"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CpfValidator = void 0;
class CpfValidator {
    execute(cpf) {
        let Sum = 0;
        let Rest = 0;
        cpf = cpf.replace(/[^\d]+/g, '');
        if (!cpf)
            return false;
        if (cpf.split('').every((digit) => cpf[0] === digit))
            return false;
        for (let i = 1; i <= 9; i++) {
            Sum = Sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
        }
        Rest = (Sum * 10) % 11;
        if (Rest === 10 || Rest === 11)
            Rest = 0;
        if (Rest !== parseInt(cpf.substring(9, 10)))
            return false;
        Sum = 0;
        for (let i = 1; i <= 10; i++)
            Sum = Sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
        Rest = (Sum * 10) % 11;
        if (Rest === 10 || Rest === 11)
            Rest = 0;
        if (Rest !== parseInt(cpf.substring(10, 11)))
            return false;
        return true;
    }
}
exports.CpfValidator = CpfValidator;
//# sourceMappingURL=cpfValidator.js.map