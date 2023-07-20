import { Ong } from '@domain/Ong\'s/Ongs';
import { Ongs } from '@prisma/client';

export abstract class OngsRepository {
  abstract findAllOngs(): Promise<Ongs[] | Error>;

}
