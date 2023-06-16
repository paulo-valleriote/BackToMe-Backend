import { MissingParamError } from '@app/errors/MissingParamError';
import { z } from 'zod';

interface AddressProps {
  cep: string;
  complement: string;
}

interface NewAddress {
  body: AddressProps;
  statusCode: number;
}

export class Address {
  props?: AddressProps;

  constructor(props: AddressProps) {
    const newUser = this.handle(props);

    if (newUser.statusCode >= 300) {
      throw newUser.body;
    }

    if (newUser.statusCode < 300) {
      this.props = newUser.body;
    }
  }

  handle(props: AddressProps): NewAddress {
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

  private isValid(params: AddressProps): {
    isValid: boolean;
    body: any;
    statusCode: number;
  } {
    const addressSchema = z.object({
      cep: z.string(),
      complement: z.string(),
    });

    const userIsValid = addressSchema.safeParse(params);
    if (!userIsValid.success) {
      const errorPath = userIsValid.error.errors[0].path[0].toString();

      return {
        isValid: false,
        body: new MissingParamError(errorPath),
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
