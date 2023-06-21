import { User } from '@domain/User/User';
import { EditUserDTO } from '@infra/http/dtos/User/editUser.dto';
import { UserLoginDTO } from '@infra/http/dtos/User/login.dto';

export abstract class UserRepository {
  abstract register(user: User): Promise<void>;

  abstract login(account: UserLoginDTO): Promise<string | Error>;

  abstract edit(userId: string, account: EditUserDTO): Promise<void | Error>;
}
