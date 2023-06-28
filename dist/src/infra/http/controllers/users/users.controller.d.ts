import { RegisterUserDTO } from '@infra/http/dtos/User/registerUser.dto';
import { UserService } from '@infra/http/services/users/users.service';
import { UserLoginDTO } from '@infra/http/dtos/User/login.dto';
import { EditUserDTO } from '@infra/http/dtos/User/editUser.dto';
import { EditPasswordDTO } from '@infra/http/dtos/User/editPassword.dto';
import { ResetPasswordDTO } from '@infra/http/dtos/User/resetPassword.dto';
export declare class UsersController {
    private userService;
    constructor(userService: UserService);
    register(registerUserDTO: RegisterUserDTO): Promise<{
        message: string;
    }>;
    login(userLoginDTO: UserLoginDTO): Promise<string>;
    validateEmail({ email }: {
        email: string;
    }): Promise<import("../../dtos/User/emailValidationResponse.dto").EmailValidationResponseDTO>;
    edit(editUserDTO: EditUserDTO, id: string): Promise<void>;
    editPassword(id: string, request: EditPasswordDTO): Promise<string | void>;
    resetPassword(id: string, request: ResetPasswordDTO): Promise<string | Error>;
}
