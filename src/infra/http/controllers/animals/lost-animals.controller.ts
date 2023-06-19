import { RegisterLostAnimalDTO } from '@infra/http/dtos/LostAnimal/registerLostAnimal.dto';
import { LostAnimalService } from '@infra/http/services/animals/lost-animals.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('lost-animals')
export class LostAnimalsController {
  constructor(private lostAnimalsSerivce: LostAnimalService) {}

  @Post('registered')
  async register(@Body() registerLostAnimalDTO: RegisterLostAnimalDTO) {
    return this.lostAnimalsSerivce.register(registerLostAnimalDTO);
  }

  @Get('find')
  async find() {
    return this.lostAnimalsSerivce.find();
  }
}
