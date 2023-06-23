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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoundAnimalsController = void 0;
const found_animals_service_1 = require("../../services/animals/FoundAnimals/found-animals.service");
const common_1 = require("@nestjs/common");
let FoundAnimalsController = exports.FoundAnimalsController = class FoundAnimalsController {
    constructor(foundAnimalSerivce) {
        this.foundAnimalSerivce = foundAnimalSerivce;
    }
    async register(registerFoundAnimalDTO) {
        return await this.foundAnimalSerivce.register(registerFoundAnimalDTO);
    }
};
__decorate([
    (0, common_1.Post)('registered'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FoundAnimalsController.prototype, "register", null);
exports.FoundAnimalsController = FoundAnimalsController = __decorate([
    (0, common_1.Controller)('animals-found'),
    __metadata("design:paramtypes", [found_animals_service_1.FoundAnimalService])
], FoundAnimalsController);
//# sourceMappingURL=found-animals.controller.js.map