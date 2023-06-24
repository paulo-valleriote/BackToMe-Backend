"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareToEncrypted = void 0;
const bcrypt_1 = require("bcrypt");
const compareToEncrypted = ({ receivedString, encryptedString, }) => {
    return (0, bcrypt_1.compareSync)(receivedString, encryptedString);
};
exports.compareToEncrypted = compareToEncrypted;
//# sourceMappingURL=compareToEncrypted.js.map