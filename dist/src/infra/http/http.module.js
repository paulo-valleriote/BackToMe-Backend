"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpModule = void 0;
const common_1 = require("@nestjs/common");
const lost_animals_module_1 = require("./controllers/animals/lost-animals.module");
const user_module_1 = require("./controllers/users/user.module");
const found_animals_module_1 = require("./controllers/animals/found-animals.module");
const adoption_animals_module_1 = require("./controllers/animals/adoption-animals.module");
const images_module_1 = require("./controllers/images/images.module");
let HttpModule = exports.HttpModule = class HttpModule {
};
exports.HttpModule = HttpModule = __decorate([
    (0, common_1.Module)({
        imports: [
            lost_animals_module_1.LostAnimalsModule,
            user_module_1.UsersModule,
            found_animals_module_1.FoundAnimalsModule,
            adoption_animals_module_1.AdoptionAnimalsModule,
            images_module_1.ImagesModule,
        ],
    })
], HttpModule);
//# sourceMappingURL=http.module.js.map