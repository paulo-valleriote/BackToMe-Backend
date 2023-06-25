"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LostAnimal = void 0;
const Animal_1 = require("../Animal/Animal");
const zod_1 = require("zod");
class LostAnimal extends Animal_1.Animal {
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
            date_loss: zod_1.z.string({
                required_error: 'Data da perda não foi informada',
            }),
            location_loss: zod_1.z.string({
                required_error: 'Localização da perda não foi informada',
            }),
            userId: zod_1.z.string({
                required_error: 'Identificação do usuário não foi informada',
            }),
        }));
        const newAnimal = this.handle(animalProps);
        this.props = newAnimal.body;
    }
}
exports.LostAnimal = LostAnimal;
//# sourceMappingURL=LostAnimal.js.map