import { UserRepository } from '@app/repositories/User/user';
import { User } from '@domain/User/User';
import { EditUserDTO } from '@infra/http/dtos/User/editUser.dto';
import { UserLoginDTO } from '@infra/http/dtos/User/login.dto';
import { BadRequestException } from '@nestjs/common';

export class inMemoryUserRepository implements UserRepository {
  public users: User[] = [];

  async register(user: User): Promise<string> {
    this.users.push(user);

    return 'valid_id';
  }

  async login(account: UserLoginDTO): Promise<string | Error> {
    const userIndex = this.users.findIndex(
      (user) => user.props.email === account.email,
    );

    if (
      userIndex < 0 ||
      this.users[userIndex].props.password !== account.password
    ) {
      return new BadRequestException('E-mail or password are incorrect');
    }

    return 'random_token';
  }

  async edit(userId: string, user: EditUserDTO): Promise<void | Error> {
    if (!userId) {
      return new BadRequestException('Invalid user identification');
    }

    const userIndex = this.users.findIndex(
      (user) => user.props.name === userId,
    );

    Object.assign(this.users[userIndex].props, user);
  }

  async validateEmail(email: string): Promise<boolean> {
    const storedEmail = this.users.findIndex(
      (user) => user.props.email === email,
    );

    if (storedEmail < 0) {
      return false;
    }

    return true;
  }
}
