"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdoptionAnimalsDatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const adoption_animals_1 = require("../../../../app/repositories/AdoptionAnimals/adoption-animals");
const prisma_adoption_animal_repository_1 = require("./prisma-adoption-animal-repository");
let AdoptionAnimalsDatabaseModule = exports.AdoptionAnimalsDatabaseModule = class AdoptionAnimalsDatabaseModule {
};
exports.AdoptionAnimalsDatabaseModule = AdoptionAnimalsDatabaseModule = __decorate([
    (0, common_1.Module)({
        providers: [
            prisma_service_1.PrismaService,
            {
                provide: adoption_animals_1.AdoptionAnimalsRepository,
                useClass: prisma_adoption_animal_repository_1.PrismaAdoptionAnimalsRepository,
            },
        ],
        exports: [
            {
                provide: adoption_animals_1.AdoptionAnimalsRepository,
                useClass: prisma_adoption_animal_repository_1.PrismaAdoptionAnimalsRepository,
            },
        ],
    })
], AdoptionAnimalsDatabaseModule);
//# sourceMappingURL=prisma-adoption-animal-database.module.js.map