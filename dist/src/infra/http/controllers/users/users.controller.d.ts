import { RegisterUserDTO } from '@infra/http/dtos/User/registerUser.dto';
import { UserService } from '@infra/http/services/users/users.service';
import { UserLoginDTO } from '@infra/http/dtos/User/login.dto';
import { EditUserDTO } from '@infra/http/dtos/User/editUser.dto';
import { EditPasswordDTO } from '@infra/http/dtos/User/editPassword.dto';
import { PasswordRecoveryDTO } from '@infra/http/dtos/User/passwordRecovery.dto';
import { ResetPasswordDTO } from '@infra/http/dtos/User/resetPassword.dto';
export declare class UsersController {
    private userService;
    constructor(userService: UserService);
    register(registerUserDTO: RegisterUserDTO): Promise<{
        message: string;
    }>;
    login(userLoginDTO: UserLoginDTO): Promise<string | Error>;
    validateEmail({ email }: {
        email: string;
    }): Promise<{
        email: string;
    }>;
    passwordRecovery(passwordRecoveryDTO: PasswordRecoveryDTO): Promise<{
        link: any;
    }>;
    edit(editUserDTO: EditUserDTO, id: string): Promise<void>;
    editPassword(id: string, request: EditPasswordDTO): Promise<any>;
    resetPassword(id: string, request: ResetPasswordDTO): Promise<any>;
}
