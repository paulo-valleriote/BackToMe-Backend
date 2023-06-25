"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoundAnimalsModule = void 0;
const common_1 = require("@nestjs/common");
const found_animals_service_1 = require("../../services/animals/FoundAnimals/found-animals.service");
const found_animals_controller_1 = require("./found-animals.controller");
const prisma_found_animals_database_module_1 = require("../../../database/prisma/repositories/prisma-found-animals-database.module");
let FoundAnimalsModule = exports.FoundAnimalsModule = class FoundAnimalsModule {
};
exports.FoundAnimalsModule = FoundAnimalsModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_found_animals_database_module_1.FoundAnimalsDatabaseModule],
        controllers: [found_animals_controller_1.FoundAnimalsController],
        providers: [found_animals_service_1.FoundAnimalService],
    })
], FoundAnimalsModule);
//# sourceMappingURL=found-animals.module.js.map