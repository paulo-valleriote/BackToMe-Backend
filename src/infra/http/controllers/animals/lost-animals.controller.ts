import { RegisterLostAnimalDTO } from '@infra/http/dtos/LostAnimal/registerLostAnimal.dto';
import { LostAnimalService } from '@infra/http/services/animals/lost-animals.service';
import { Body, Controller, Get } from '@nestjs/common';

@Controller('/lost-animals')
export class LostAnimalsController {
  constructor(private lostAnimalsSerivce: LostAnimalService) {}

  @Get('/registered')
  async register(@Body() registerLostAnimalDTO: RegisterLostAnimalDTO) {
    return this.lostAnimalsSerivce.register(registerLostAnimalDTO);
  }
}
