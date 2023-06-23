"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_user_database_module_1 = require("../../../database/prisma/repositories/prisma-user-database.module");
const users_controller_1 = require("./users.controller");
const users_service_1 = require("../../services/users/users.service");
const phoneValidator_1 = require("../../../../app/protocols/phone/phoneValidator");
const cpfValidator_1 = require("../../../../app/protocols/cpf/cpfValidator");
const emailAlreadyExists_1 = require("../../middlewares/users/emailAlreadyExists");
const cpfAlreadyInUse_1 = require("../../middlewares/users/cpfAlreadyInUse");
const prisma_service_1 = require("../../../database/prisma/prisma.service");
let UsersModule = exports.UsersModule = class UsersModule {
    configure(consumer) {
        consumer
            .apply(emailAlreadyExists_1.EmailAlreadyExistsMiddleware)
            .forRoutes({ path: '/users/registered', method: common_1.RequestMethod.POST })
            .apply(cpfAlreadyInUse_1.CpfAlreadyInUseMiddleware)
            .forRoutes({ path: '/users/registered', method: common_1.RequestMethod.POST });
    }
};
exports.UsersModule = UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_user_database_module_1.UsersDatabaseModule],
        controllers: [users_controller_1.UsersController],
        providers: [users_service_1.UserService, phoneValidator_1.PhoneValidator, cpfValidator_1.CpfValidator, prisma_service_1.PrismaService],
    })
], UsersModule);
//# sourceMappingURL=user.module.js.map