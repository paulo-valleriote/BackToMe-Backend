import { PrismaService } from '../prisma.service';
import { User } from '@domain/User/User';
import { UserRepository } from '@app/repositories/User/user';
import { UserLoginDTO } from '@infra/http/dtos/User/login.dto';
import { EditUserDTO } from '@infra/http/dtos/User/editUser.dto';
export declare class PrismaUserRepository implements UserRepository {
    private prismaService;
    constructor(prismaService: PrismaService);
    register(user: User): Promise<string>;
    login(account: UserLoginDTO): Promise<string | Error>;
    edit(userId: string, account: EditUserDTO): Promise<void | Error>;
    findUserById(id: string): Promise<any>;
    updatePassword(id: string, newPassword: string): Promise<boolean>;
    findByEmail(email: string): Promise<string>;
}
