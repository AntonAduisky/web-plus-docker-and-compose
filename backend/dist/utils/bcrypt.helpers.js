"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compare = exports.hash = void 0;
const bcrypt = require("bcrypt");
const hash = async (password) => {
    return await bcrypt.hash(password, 10);
};
exports.hash = hash;
const compare = async (password, user) => {
    return await bcrypt.compare(password, user.password).then((matched) => {
        if (!matched)
            return null;
        return user;
    });
};
exports.compare = compare;
//# sourceMappingURL=bcrypt.helpers.js.map