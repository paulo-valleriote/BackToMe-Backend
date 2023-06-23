import { RegisterUserDTO } from '@infra/http/dtos/User/registerUser.dto';
import { UserService } from '@infra/http/services/users/users.service';
import { UserLoginDTO } from '@infra/http/dtos/User/login.dto';
import { EditUserDTO } from '@infra/http/dtos/User/editUser.dto';
export declare class UsersController {
    private userService;
    constructor(userService: UserService);
    register(registerUserDTO: RegisterUserDTO): Promise<{
        message: string;
    }>;
    login(userLoginDTO: UserLoginDTO): Promise<string | Error>;
    edit(editUserDTO: EditUserDTO, id: string): Promise<void>;
}
