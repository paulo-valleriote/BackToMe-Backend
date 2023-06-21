import { PhoneValidator } from './phoneValidator';

describe('Phone Validator', () => {
  it('should return false if invalid phone number', () => {
    const phoneNumber = '111111111';

    const phoneNumberIsValid = new PhoneValidator().execute(phoneNumber);

    expect(phoneNumberIsValid).toBeFalsy();
  });

  it('should return verified phone number if is valid', () => {
    const phoneNumber = '11 98765-4321';

    const phoneNumberIsValid = new PhoneValidator().execute(phoneNumber);

    expect(phoneNumberIsValid).toEqual(phoneNumber);
  });
});
