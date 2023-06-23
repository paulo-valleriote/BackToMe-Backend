import { z } from 'zod';

export class PhoneValidator {
  execute(phone: string): string | false {
    const phoneRegex = new RegExp(
      '^([1-9]{2}) (?:[2-8]|9[1-9])[0-9]{3}-[0-9]{4}$',
    );

    const phoneSchema = z.string().regex(phoneRegex);
    const phoneIsValid = phoneSchema.safeParse(phone);

    if (!phoneIsValid.success) {
      return false;
    }

    return phoneIsValid.data;
  }
}
