import { MissingParamError } from '@app/errors/MissingParamError';
import { z } from 'zod';

interface UserProps {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  password: string;
}

interface NewUser {
  body: UserProps;
  statusCode: number;
}

export class User {
  props?: UserProps;
  protected requiredParams: string[];

  constructor(props: UserProps) {
    this.requiredParams = ['name', 'email', 'cpf', 'phone', 'password'];

    const newUser = this.handle(props);

    if (newUser.statusCode >= 300) {
      throw newUser.body;
    }

    if (newUser.statusCode < 300) {
      this.props = newUser.body;
    }
  }

  handle(props: UserProps): NewUser {
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

  private isValid(params: UserProps): {
    isValid: boolean;
    body: any;
    statusCode: number;
  } {
    const userSchema = z.object({
      name: z.string().min(3),
      email: z.string().email().min(6),
      phone: z.string().min(9),
      cpf: z.string().length(11),
      password: z.string().min(6),
    });

    const userIsValid = userSchema.safeParse(params);
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
