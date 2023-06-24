"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CpfValidator = void 0;
class CpfValidator {
    execute(cpf) {
        if (!cpf) {
            throw new Error('None CPF provided');
        }
        const formatedCpf = cpf.replace(/[^\d]+/g, '');
        if (formatedCpf.length !== 11 || !!formatedCpf.match(/(\d)\1{10}/))
            return false;
        const rest = (count) => {
            const slicedCpf = formatedCpf.slice(0, count - 12);
            const digitArray = slicedCpf.split('').map((digit) => Number(digit));
            const digitSum = digitArray.reduce((soma, el, index) => soma + el * (count - index), 0) *
                10;
            const cpfRest = (digitSum % 11) % 10;
            return cpfRest.toString();
        };
        return rest(10) === cpf[9] && rest(11) === cpf[10];
    }
}
exports.CpfValidator = CpfValidator;
//# sourceMappingURL=cpfValidator.js.map