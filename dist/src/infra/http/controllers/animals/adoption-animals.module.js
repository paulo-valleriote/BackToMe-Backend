"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdoptionAnimalsModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_adoption_animal_database_module_1 = require("../../../database/prisma/repositories/prisma-adoption-animal-database.module");
const adoption_animals_controller_1 = require("./adoption-animals.controller");
const adoption_animals_service_1 = require("../../services/animals/AdoptionAnimals/adoption-animals.service");
let AdoptionAnimalsModule = exports.AdoptionAnimalsModule = class AdoptionAnimalsModule {
};
exports.AdoptionAnimalsModule = AdoptionAnimalsModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_adoption_animal_database_module_1.AdoptionAnimalsDatabaseModule],
        controllers: [adoption_animals_controller_1.AdoptionAnimalsController],
        providers: [adoption_animals_service_1.AdoptionAnimalsService],
    })
], AdoptionAnimalsModule);
//# sourceMappingURL=adoption-animals.module.js.map