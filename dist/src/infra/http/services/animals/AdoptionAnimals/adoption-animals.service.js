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
exports.AdoptionAnimalsService = void 0;
const adoption_animals_1 = require("../../../../../app/repositories/AdoptionAnimals/adoption-animals");
const AdoptionAnimal_1 = require("../../../../../domain/AdoptionAnimal/AdoptionAnimal");
const common_1 = require("@nestjs/common");
let AdoptionAnimalsService = exports.AdoptionAnimalsService = class AdoptionAnimalsService {
    constructor(adoptionAnimalsRepository) {
        this.adoptionAnimalsRepository = adoptionAnimalsRepository;
    }
    async register(request) {
        const newAnimal = new AdoptionAnimal_1.AdoptionAnimal(request);
        await this.adoptionAnimalsRepository.create(newAnimal);
    }
    async list() {
        const adoptionAnimals = await this.adoptionAnimalsRepository.find();
        if (adoptionAnimals instanceof Error) {
            throw adoptionAnimals;
        }
        return adoptionAnimals;
    }
};
exports.AdoptionAnimalsService = AdoptionAnimalsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [adoption_animals_1.AdoptionAnimalsRepository])
], AdoptionAnimalsService);
//# sourceMappingURL=adoption-animals.service.js.map