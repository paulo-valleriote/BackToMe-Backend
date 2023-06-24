import { User } from '@domain/User/User';
import { EditPasswordDTO } from '@infra/http/dtos/User/editPassword.dto';
import { EditUserDTO } from '@infra/http/dtos/User/editUser.dto';
import { UserLoginDTO } from '@infra/http/dtos/User/login.dto';

export abstract class UserRepository {
  abstract register(user: User): Promise<string>;

  abstract login(account: UserLoginDTO): Promise<string | Error>;

  abstract edit(userId: string, account: EditUserDTO): Promise<void | Error>;

  abstract findUserById(userId: string): Promise<User>;

  abstract updatePassword(userId: string, newPassword: string): Promise<User>;
  abstract findByEmail(email: string): Promise<string>;
}
