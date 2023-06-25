"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_user_database_module_1 = require("./prisma/repositories/prisma-user-database.module");
const prisma_lost_animal_database_module_1 = require("./prisma/repositories/prisma-lost-animal-database.module");
const prisma_adoption_animal_database_module_1 = require("./prisma/repositories/prisma-adoption-animal-database.module");
const prisma_found_animals_database_module_1 = require("./prisma/repositories/prisma-found-animals-database.module");
let DatabaseModule = exports.DatabaseModule = class DatabaseModule {
};
exports.DatabaseModule = DatabaseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            prisma_user_database_module_1.UsersDatabaseModule,
            prisma_lost_animal_database_module_1.LostAnimalsDatabaseModule,
            prisma_adoption_animal_database_module_1.AdoptionAnimalsDatabaseModule,
            prisma_found_animals_database_module_1.FoundAnimalsDatabaseModule,
        ],
    })
], DatabaseModule);
//# sourceMappingURL=database.module.js.map