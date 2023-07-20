import { MissingParamError } from '@app/errors/MissingParamError';
import { z } from 'zod';

export type OngsProps = any;

interface NewOng {
  body: OngsProps | Error;
  statusCode: number;
}

export class Ongs {
  props?: OngsProps;
  protected propsValidationSchema: z.ZodObject<any>;

  constructor(propsValidationSchema: z.ZodObject<any>) {
    this.propsValidationSchema = propsValidationSchema;
  }

  handle(httpRequest: OngsProps): NewOng {
    const body = this.propsValidationSchema.safeParse(httpRequest);

    if (!body.success) {
      const errorPath = body.error.errors[0].path[0].toLocaleString();

      throw new MissingParamError(errorPath);
    }



    return {
      body: body.data,
      statusCode: 200,
    };
  }


}
