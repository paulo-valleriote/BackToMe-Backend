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
exports.LostAnimalService = void 0;
const lost_animals_1 = require("../../../../../app/repositories/LostAnimals/lost-animals");
const LostAnimal_1 = require("../../../../../domain/LostAnimal/LostAnimal");
const common_1 = require("@nestjs/common");
let LostAnimalService = exports.LostAnimalService = class LostAnimalService {
    constructor(lostAnimalRepository) {
        this.lostAnimalRepository = lostAnimalRepository;
    }
    async register(request) {
        const newAnimal = new LostAnimal_1.LostAnimal(request);
        await this.lostAnimalRepository.create(newAnimal);
        return newAnimal;
    }
    async find() {
        const lostAnimalsList = await this.lostAnimalRepository.find();
        if (lostAnimalsList instanceof Error) {
            return lostAnimalsList;
        }
        return lostAnimalsList;
    }
};
exports.LostAnimalService = LostAnimalService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [lost_animals_1.LostAnimalsRepository])
], LostAnimalService);
//# sourceMappingURL=lost-animals.service.js.map