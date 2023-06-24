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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaUserRepository = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const prisma_service_1 = require("../prisma.service");
const common_1 = require("@nestjs/common");
const compareToEncrypted_1 = require("../../../../app/protocols/crypto/compare/compareToEncrypted");
let PrismaUserRepository = exports.PrismaUserRepository = class PrismaUserRepository {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async register(user) {
        if (user.props instanceof Error || !user.props) {
            throw new common_1.BadRequestException('Erro ao cadastrar usuário');
        }
        const _a = user.props, { address } = _a, userProps = __rest(_a, ["address"]);
        const { id } = await this.prismaService.user.create({
            data: Object.assign({}, userProps),
            select: {
                id: true,
            },
        });
        if ((address === null || address === void 0 ? void 0 : address.cep) && address.complement) {
            await this.prismaService.address.create({
                data: Object.assign(Object.assign({}, address), { id }),
            });
        }
    }
    async login(account) {
        const databaseStored = await this.prismaService.user.findUnique({
            where: { email: account.email },
        });
        if (!(databaseStored === null || databaseStored === void 0 ? void 0 : databaseStored.password) ||
            !(0, compareToEncrypted_1.compareToEncrypted)({
                receivedString: account.password,
                encryptedString: databaseStored.password,
            })) {
            return new common_1.BadRequestException('E-mail or password are incorrect');
        }
        return (0, jsonwebtoken_1.sign)({ id: databaseStored.id }, process.env.JWT_SECRET);
    }
    async edit(userId, account) {
        var _a, _b;
        if (!userId) {
            throw new common_1.BadRequestException('Invalid user identification');
        }
        this.prismaService.user.update({
            data: {
                name: account.name,
                email: account.email,
                password: account.password,
                phone: account.phone,
                cpf: account.cpf,
                address: {
                    update: {
                        cep: (_a = account.address) === null || _a === void 0 ? void 0 : _a.cep,
                        complement: (_b = account.address) === null || _b === void 0 ? void 0 : _b.complement,
                    },
                },
            },
            where: {
                id: userId,
            },
        });
    }
    async findUserById(userId) {
        const user = await this.prismaService.user.findFirst({
            where: { id: userId },
        });
        if (!user) {
            throw new common_1.BadRequestException('Usuário não encontrado');
        }
        return user;
    }
    async updatePassword(userId, newPassword) {
        const user = await this.findUserById(userId);
        this.prismaService.user.update({
            where: { id: userId },
            data: { password: newPassword },
        });
        return user;
    }
};
exports.PrismaUserRepository = PrismaUserRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PrismaUserRepository);
//# sourceMappingURL=prisma-user-repository.js.map