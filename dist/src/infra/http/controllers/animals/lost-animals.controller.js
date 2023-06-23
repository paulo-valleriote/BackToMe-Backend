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
exports.LostAnimalsController = void 0;
const lost_animals_service_1 = require("../../services/animals/LostAnimals/lost-animals.service");
const common_1 = require("@nestjs/common");
let LostAnimalsController = exports.LostAnimalsController = class LostAnimalsController {
    constructor(lostAnimalsSerivce) {
        this.lostAnimalsSerivce = lostAnimalsSerivce;
    }
    async register(registerLostAnimalDTO) {
        return this.lostAnimalsSerivce.register(registerLostAnimalDTO);
    }
    async find() {
        const lostAnimalsList = await this.lostAnimalsSerivce.find();
        if (lostAnimalsList instanceof Error)
            throw lostAnimalsList;
        return lostAnimalsList.map((lostAnimals) => (Object.assign({}, lostAnimals)));
    }
};
__decorate([
    (0, common_1.Post)('registered'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LostAnimalsController.prototype, "register", null);
__decorate([
    (0, common_1.Get)('find'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LostAnimalsController.prototype, "find", null);
exports.LostAnimalsController = LostAnimalsController = __decorate([
    (0, common_1.Controller)('lost-animals'),
    __metadata("design:paramtypes", [lost_animals_service_1.LostAnimalService])
], LostAnimalsController);
//# sourceMappingURL=lost-animals.controller.js.map