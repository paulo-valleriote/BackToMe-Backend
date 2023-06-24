"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeHash = void 0;
const bcrypt_1 = require("bcrypt");
const makeHash = (stringToEncrypt) => (0, bcrypt_1.hashSync)(stringToEncrypt, 10);
exports.makeHash = makeHash;
//# sourceMappingURL=makeHash.js.map