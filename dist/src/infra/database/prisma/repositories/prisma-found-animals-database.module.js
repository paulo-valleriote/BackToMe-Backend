"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoundAnimalsDatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const found_animals_1 = require("../../../../app/repositories/FoundAnimals/found-animals");
const prisma_found_animals_repository_1 = require("./prisma-found-animals-repository");
let FoundAnimalsDatabaseModule = exports.FoundAnimalsDatabaseModule = class FoundAnimalsDatabaseModule {
};
exports.FoundAnimalsDatabaseModule = FoundAnimalsDatabaseModule = __decorate([
    (0, common_1.Module)({
        providers: [
            prisma_service_1.PrismaService,
            {
                provide: found_animals_1.FoundAnimalsRepository,
                useClass: prisma_found_animals_repository_1.PrismaFoundAnimalsRepository,
            },
        ],
        exports: [
            {
                provide: found_animals_1.FoundAnimalsRepository,
                useClass: prisma_found_animals_repository_1.PrismaFoundAnimalsRepository,
            },
        ],
    })
], FoundAnimalsDatabaseModule);
//# sourceMappingURL=prisma-found-animals-database.module.js.map