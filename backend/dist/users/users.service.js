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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const bcrypt_helpers_1 = require("../utils/bcrypt.helpers");
let UsersService = class UsersService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async createUser(createUserDto) {
        try {
            const hashedPassword = await (0, bcrypt_helpers_1.hash)(createUserDto.password);
            const createdUser = this.userRepository.create(Object.assign(Object.assign({}, createUserDto), { password: hashedPassword }));
            return await this.userRepository.save(createdUser);
        }
        catch (err) {
            throw new Error(err.message);
        }
    }
    async findUserById(id) {
        const user = await this.userRepository.findOneBy({ id });
        delete user.password;
        return user;
    }
    async findUserByUsername(username) {
        return await this.userRepository.findOneBy({ username });
    }
    async findManyUsers(user) {
        const users = await this.userRepository.find({
            where: [{ email: user.query }, { username: user.query }],
        });
        users.forEach((user) => {
            delete user.password;
        });
        return users;
    }
    async updateUserById(id, updateUserDto) {
        try {
            const user = await this.findUserById(id);
            const hashedPassword = await (0, bcrypt_helpers_1.hash)(updateUserDto.password);
            const updatedUser = Object.assign(Object.assign({}, user), { password: hashedPassword, email: updateUserDto.email, about: updateUserDto.about, username: updateUserDto.username, avatar: updateUserDto.avatar });
            await this.userRepository.update(user.id, updatedUser);
            return await this.findUserById(id);
        }
        catch (err) {
            throw new Error(err.message);
        }
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map