import { UserRepository } from '@app/repositories/User/user';
import { User } from '@domain/User/User';
import { UserLoginDTO } from '@infra/http/dtos/User/login.dto';
import { BadRequestException } from '@nestjs/common';

export class inMemoryUserRepository implements UserRepository {
  public users: User[] = [];

  async register(user: User): Promise<void> {
    this.users.push(user);
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
}
