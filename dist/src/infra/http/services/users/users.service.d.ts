import { UserRepository } from '@app/repositories/User/user';
import { User } from '@domain/User/User';
import { CpfValidator } from '@app/protocols/cpf/cpfValidator';
import { PhoneValidator } from '@app/protocols/phone/phoneValidator';
import { UserLoginDTO } from '@infra/http/dtos/User/login.dto';
import { EditUserDTO } from '@infra/http/dtos/User/editUser.dto';
import { RegisterUserDTO } from '@infra/http/dtos/User/registerUser.dto';
import { EditPasswordDTO } from '@infra/http/dtos/User/editPassword.dto';
import { PasswordRecoveryDTO } from '@infra/http/dtos/User/passwordRecovery.dto';
export declare class UserService {
    private userRepository;
    private phoneValidator;
    private cpfValidator;
    constructor(userRepository: UserRepository, phoneValidator: PhoneValidator, cpfValidator: CpfValidator);
    register(request: RegisterUserDTO): Promise<User | Error>;
    login(request: UserLoginDTO): Promise<string | Error>;
    edit(userId: string, request: EditUserDTO): Promise<void | Error>;
    editPassword(id: string, request: EditPasswordDTO): Promise<string>;
    validateEmail(email: string): Promise<string>;
    passwordRecovery(request: PasswordRecoveryDTO): Promise<string>;
}
