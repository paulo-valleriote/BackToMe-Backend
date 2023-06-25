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
exports.FoundAnimalService = void 0;
const found_animals_1 = require("../../../../../app/repositories/FoundAnimals/found-animals");
const FoundAnimal_1 = require("../../../../../domain/AnimalFound/FoundAnimal");
const common_1 = require("@nestjs/common");
let FoundAnimalService = exports.FoundAnimalService = class FoundAnimalService {
    constructor(foundAnimalsRepository) {
        this.foundAnimalsRepository = foundAnimalsRepository;
    }
    async register(request) {
        const newAnimal = new FoundAnimal_1.FoundAnimal(request);
        await this.foundAnimalsRepository.create(newAnimal);
    }
};
exports.FoundAnimalService = FoundAnimalService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [found_animals_1.FoundAnimalsRepository])
], FoundAnimalService);
//# sourceMappingURL=found-animals.service.js.map