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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../../services/users/users.service");
const MissingParamError_1 = require("../../../../app/errors/MissingParamError");
let UsersController = exports.UsersController = class UsersController {
    constructor(userService) {
        this.userService = userService;
    }
    async register(registerUserDTO) {
        const id = await this.userService.register(registerUserDTO);
        if (id instanceof Error)
            throw new common_1.BadRequestException(id.message);
        return { message: 'Usuário cadastrado com sucesso!' };
    }
    async login(userLoginDTO) {
        const token = await this.userService.login(userLoginDTO);
        return token;
    }
    async validateEmail({ email }) {
        if (!email) {
            throw new MissingParamError_1.MissingParamError('email');
        }
        const emailIsValid = await this.userService.validateEmail(email);
        return { email: emailIsValid };
    }
    async passwordRecovery(passwordRecoveryDTO) {
        const verificationLink = await this.userService.passwordRecovery(passwordRecoveryDTO);
        if (!verificationLink) {
            throw new common_1.InternalServerErrorException('Ocorreu um erro ao recuperar sua senha');
        }
        return { link: verificationLink };
    }
    async edit(editUserDTO, id) {
        await this.userService.edit(id, editUserDTO);
    }
    async editPassword(id, request) {
        await this.userService.editPassword(id, request);
    }
    async resetPassword(id, request) {
        return await this.userService.resetPassword(id, request);
    }
};
__decorate([
    (0, common_1.Post)('registered'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('validate/email'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "validateEmail", null);
__decorate([
    (0, common_1.Post)('recovery-password'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "passwordRecovery", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "edit", null);
__decorate([
    (0, common_1.Patch)(':id/password'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "editPassword", null);
__decorate([
    (0, common_1.Patch)(':id/change-password'),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "resetPassword", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UserService])
], UsersController);
//# sourceMappingURL=users.controller.js.map