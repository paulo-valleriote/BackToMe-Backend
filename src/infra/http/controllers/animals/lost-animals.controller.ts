import { Controller, Get } from '@nestjs/common';

@Controller('/lost-animals')
export class LostAnimalsController {
  constructor() {}

  @Get('/registered')
  async register() {
    return {};
  }
}
