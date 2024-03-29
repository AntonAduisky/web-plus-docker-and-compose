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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const update_user_dto_1 = require("./dto/update-user.dto");
const wishes_service_1 = require("../wishes/wishes.service");
const jwt_guard_1 = require("../auth/guards/jwt.guard");
const user_interceptor_1 = require("../utils/interceptors/user.interceptor");
let UsersController = class UsersController {
    constructor(usersService, wishesService) {
        this.usersService = usersService;
        this.wishesService = wishesService;
    }
    async getMyProfile(req) {
        return this.usersService.findUserById(req.user.id);
    }
    async findUserByUsername(username) {
        return await this.usersService.findUserByUsername(username);
    }
    async findMyWishes(req) {
        return this.wishesService.findWishesByOwner(req.user.id);
    }
    async findWishesByUsername(username) {
        const user = await this.usersService.findUserByUsername(username);
        return this.wishesService.findWishesByOwner(user.id);
    }
    async findManyUsers(user) {
        return this.usersService.findManyUsers(user);
    }
    async updateMyProfile(req, updateUserDto) {
        return this.usersService.updateUserById(req.user.id, updateUserDto);
    }
};
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getMyProfile", null);
__decorate([
    (0, common_1.Get)(':username'),
    __param(0, (0, common_1.Param)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findUserByUsername", null);
__decorate([
    (0, common_1.Get)('me/wishes'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findMyWishes", null);
__decorate([
    (0, common_1.Get)(':username/wishes'),
    __param(0, (0, common_1.Param)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findWishesByUsername", null);
__decorate([
    (0, common_1.Post)('find'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findManyUsers", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, common_1.Patch)('me'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateMyProfile", null);
UsersController = __decorate([
    (0, common_1.UseInterceptors)(user_interceptor_1.UserInterceptor),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        wishes_service_1.WishesService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map