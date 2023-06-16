import { InvalidParamError } from '@app/errors/InvalidParamError';
import { MissingParamError } from '@app/errors/MissingParamError';
import { makeHash } from '@app/protocols/crypto/makeHash';
import { Address } from '@domain/Address/Addres';
import { z } from 'zod';

interface UserCreationProps {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  password: string;
}

interface UserProps extends UserCreationProps {
  address: {
    cep: string;
    complement: string;
  };
}

interface NewUser {
  body: UserCreationProps;
  statusCode: number;
}

interface IsValidMethodReturn {
  isValid: boolean;
  body: any;
  statusCode: number;
}

export class User {
  props?: UserProps;

  constructor(props: UserProps) {
    const { address, ...userProps } = props;

    const newUser = this.handle(userProps);

    if (!address) {
      throw new MissingParamError('address');
    }

    const newAddress = new Address(address);

    if (newUser.statusCode >= 300) {
      throw newUser.body;
    }

    if (newUser.statusCode < 300) {
      this.props = {
        ...newUser.body,
        password: makeHash(newUser.body.password),
        address: {
          cep: newAddress.props?.cep as string,
          complement: newAddress.props?.complement as string,
        },
      };
    }
  }

  handle(props: UserCreationProps): NewUser {
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

  private isValid(params: UserCreationProps): IsValidMethodReturn {
    const userSchema = z.object({
      name: z.string().min(3),
      email: z.string().email().min(6),
      phone: z.string().min(9),
      cpf: z.string().length(11, { message: 'Invalid' }),
      password: z.string().min(6),
    });
    const userIsValid = userSchema.safeParse(params);
    if (!userIsValid.success) {
      const errorPath = userIsValid.error.errors[0].path[0].toString();
      const errorMessage = userIsValid.error.errors[0].message;
      const errorBody =
        errorMessage === 'Invalid'
          ? new InvalidParamError(errorPath)
          : new MissingParamError(errorPath);

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
