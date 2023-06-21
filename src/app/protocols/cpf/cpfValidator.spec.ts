import { CpfValidator } from './cpfValidator';

describe('Cpf', () => {
  it('should return false when all digits are the same', () => {
    const validations: boolean[] = [];

    for (let i = 0; i < 10; i++) {
      const actualDigit = i;
      let digits = '';
      for (let j = 0; j < 10; j++) {
        digits += actualDigit.toString();
      }

      const isValid = new CpfValidator().execute(digits);
      validations.push(isValid);
      digits = '';
    }

    expect(validations.every((validation) => !validation)).toBeTruthy();
  });

  it('should return false when cpf is not real', () => {
    const fakeCpf = '134.266.954-21';
    const isValid = new CpfValidator().execute(fakeCpf);

    expect(isValid).toBeFalsy();
  });
});
