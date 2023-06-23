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
exports.PrismaAdoptionAnimalsRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let PrismaAdoptionAnimalsRepository = exports.PrismaAdoptionAnimalsRepository = class PrismaAdoptionAnimalsRepository {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(animal) {
        await this.prismaService.availableAnimal.create({
            data: Object.assign({}, animal.props),
        });
    }
    async find() {
        const adoptionList = await this.prismaService.availableAnimal.findMany();
        if (adoptionList.length < 1) {
            throw new common_1.NotFoundException('There are no animals to list');
        }
        return adoptionList;
    }
};
exports.PrismaAdoptionAnimalsRepository = PrismaAdoptionAnimalsRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PrismaAdoptionAnimalsRepository);
//# sourceMappingURL=prisma-adoption-animal-repository.js.map