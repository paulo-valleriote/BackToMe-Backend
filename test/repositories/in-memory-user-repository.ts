import { UserRepository } from '@app/repositories/User/user';
import { User } from '@domain/User/User';

export class inMemoryUserRepository implements UserRepository {
  public lostAnimals: User[] = [];

  async register(user: User): Promise<void> {
    this.lostAnimals.push(user);
  }
}
