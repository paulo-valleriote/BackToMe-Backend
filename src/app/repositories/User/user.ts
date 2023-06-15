import { User } from '@domain/User/User';

export abstract class UserRepository {
  abstract register(user: User): Promise<void>;
}
