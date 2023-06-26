"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_1 = require("../../../../app/repositories/User/user");
const User_1 = require("../../../../domain/User/User");
const cpfValidator_1 = require("../../../../app/protocols/cpf/cpfValidator");
const phoneValidator_1 = require("../../../../app/protocols/phone/phoneValidator");
const InvalidParamError_1 = require("../../../../app/errors/InvalidParamError");
const MissingParamError_1 = require("../../../../app/errors/MissingParamError");
const zod_1 = require("zod");
let UserService = exports.UserService = class UserService {
    constructor(userRepository, phoneValidator, cpfValidator) {
        this.userRepository = userRepository;
        this.phoneValidator = phoneValidator;
        this.cpfValidator = cpfValidator;
    }
    async register(request) {
        var _a, _b;
        const newUser = new User_1.User(request);
        const cpfIsValid = this.cpfValidator.execute((_a = newUser.props) === null || _a === void 0 ? void 0 : _a.cpf);
        const phoneIsValid = this.phoneValidator.execute((_b = newUser.props) === null || _b === void 0 ? void 0 : _b.phone);
        if (!cpfIsValid)
            return new InvalidParamError_1.InvalidParamError('cpf');
        if (!phoneIsValid)
            return new InvalidParamError_1.InvalidParamError('phone');
        await this.userRepository.register(newUser);
        return newUser;
    }
    async login(request) {
        const requestSchema = zod_1.z.object({
            email: zod_1.z.string().email().min(6, { message: 'Invalid' }),
            password: zod_1.z.string(),
        });
        const loginProps = requestSchema.safeParse(request);
        if (!loginProps.success) {
            return new common_1.BadRequestException('Erro ao realizar login', {
                cause: new common_1.BadRequestException(),
                description: loginProps.error.errors[0].message,
            });
        }
        const userLoginResponse = await this.userRepository.login(loginProps.data);
        if (userLoginResponse instanceof common_1.BadRequestException) {
            return userLoginResponse;
        }
        return userLoginResponse;
    }
    async edit(userId, request) {
        if (!userId) {
            return new common_1.BadRequestException('Identificação de usuário inválida');
        }
        const editionGoneWrong = await this.userRepository.edit(userId, request);
        if (editionGoneWrong instanceof Error) {
            return editionGoneWrong;
        }
    }
    async editPassword(userId, request) {
        if (!userId) {
            throw new common_1.BadRequestException('Identificação de usuário inválida');
        }
        const { currentPassword, newPassword } = request;
        const user = await this.userRepository.findUserById(userId);
        if (!('password' in user)) {
            throw new common_1.BadRequestException('Usuário não encontrado');
        }
        if (user.password !== currentPassword) {
            throw new common_1.BadRequestException('Senha atual incorreta');
        }
        const updatedPassword = await this.userRepository.updatePassword(userId, newPassword);
        if (updatedPassword) {
            return 'Senha alterada com sucesso!';
        }
        return 'Senha não foi alterada!';
    }
    async resetPassword(userId, request) {
        const { password } = request;
        if (!userId) {
            return 'Identificação de usuário inválida';
        }
        const user = await this.userRepository.findUserById(userId);
        if (!user) {
            return 'Usuário não encontrado';
        }
        const updatedPassword = await this.userRepository.updatePassword(userId, password);
        if (!updatedPassword) {
            return 'Erro ao alterar senha!';
        }
        return "Senha alterada com sucesso!";
    }
    async validateEmail(email) {
        const emailIsValid = await this.userRepository.findByEmail(email);
        if (!emailIsValid) {
            return 'Nenhum usuário foi cadastrado usando este E-mail';
        }
        return 'Já existe um usuário cadastrado com este E-mail';
    }
    async passwordRecovery(request) {
        const bodySchema = zod_1.z.object({
            email: zod_1.z.string().email({ message: 'E-mail' }),
            cpf: zod_1.z.string(),
        });
        const requestBody = bodySchema.safeParse(request);
        if (!requestBody.success) {
            if (requestBody.error.message === 'E-mail') {
                throw new InvalidParamError_1.InvalidParamError('E-mail');
            }
            throw new MissingParamError_1.MissingParamError(`${requestBody.error.errors[0].path[0]}`);
        }
        const userId = await this.userRepository.findByEmail(requestBody.data.email);
        return `${process.env.FRONTEND_URL}/${userId}`;
    }
    async passwordRecovery(request) {
        const bodySchema = zod_1.z.object({
            email: zod_1.z.string().email({ message: 'E-mail' }),
            cpf: zod_1.z.string(),
        });
        const requestBody = bodySchema.safeParse(request);
        if (!requestBody.success) {
            if (requestBody.error.message === 'E-mail') {
                throw new InvalidParamError_1.InvalidParamError('E-mail');
            }
            throw new MissingParamError_1.MissingParamError(`${requestBody.error.errors[0].path[0]}`);
        }
        const userId = await this.userRepository.findByEmail(requestBody.data.email);
        return `${process.env.FRONTEND_URL}/${userId}`;
    }
};
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_1.UserRepository,
        phoneValidator_1.PhoneValidator,
        cpfValidator_1.CpfValidator])
], UserService);
//# sourceMappingURL=users.service.js.map