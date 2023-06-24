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
exports.EmailAlreadyExistsMiddleware = void 0;
const MissingParamError_1 = require("../../../../app/errors/MissingParamError");
const prisma_service_1 = require("../../../database/prisma/prisma.service");
const common_1 = require("@nestjs/common");
let EmailAlreadyExistsMiddleware = exports.EmailAlreadyExistsMiddleware = class EmailAlreadyExistsMiddleware {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async use(req, res, next) {
        const { email } = req.body;
        if (!email) {
            const missingParam = new MissingParamError_1.MissingParamError('email');
            throw new common_1.BadRequestException(missingParam.message);
        }
        const databaseRegister = await this.prismaService.user.findUnique({
            where: { email },
            select: { email: true },
        });
        if (databaseRegister === null || databaseRegister === void 0 ? void 0 : databaseRegister.email) {
            throw new common_1.BadRequestException('Email ou senha estão incorretos');
        }
        next();
    }
};
exports.EmailAlreadyExistsMiddleware = EmailAlreadyExistsMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], EmailAlreadyExistsMiddleware);
//# sourceMappingURL=emailAlreadyExists.js.map