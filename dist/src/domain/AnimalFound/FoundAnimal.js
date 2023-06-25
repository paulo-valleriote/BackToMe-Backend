"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoundAnimal = void 0;
const Animal_1 = require("../Animal/Animal");
const zod_1 = require("zod");
class FoundAnimal extends Animal_1.Animal {
    constructor(animalProps) {
        super(zod_1.z.object({
            species: zod_1.z.string({ required_error: 'Espécie não foi informada' }),
            race: zod_1.z.string({ required_error: 'Raça não foi informada' }),
            age: zod_1.z.string({ required_error: 'Idade não foi informada' }),
            color: zod_1.z.string({ required_error: 'Cor não foi informada' }),
            size: zod_1.z.string({ required_error: 'Tamanho não foi informado' }),
            distinctive_characteristics: zod_1.z.string({
                required_error: 'Características não foram informadas',
            }),
            photo: zod_1.z.string({
                required_error: 'Endereço de imagem não foi informado',
            }),
            found_location: zod_1.z.string({
                required_error: 'Endereço não foi informado',
            }),
            userId: zod_1.z.string({
                required_error: 'Identificação do usuário não foi informada',
            }),
        }));
        const newAnimal = this.handle(animalProps);
        this.props = newAnimal.body;
    }
}
exports.FoundAnimal = FoundAnimal;
//# sourceMappingURL=FoundAnimal.js.map