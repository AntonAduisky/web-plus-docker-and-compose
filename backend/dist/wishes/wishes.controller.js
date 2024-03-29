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
exports.WishesController = void 0;
const common_1 = require("@nestjs/common");
const wishes_service_1 = require("./wishes.service");
const create_wish_dto_1 = require("./dto/create-wish.dto");
const jwt_guard_1 = require("../auth/guards/jwt.guard");
const update_wish_dto_1 = require("./dto/update-wish.dto");
const wish_interceptor_1 = require("../utils/interceptors/wish.interceptor");
let WishesController = class WishesController {
    constructor(wishesService) {
        this.wishesService = wishesService;
    }
    createWish(req, createWishDto) {
        return this.wishesService.createWish(req.user, createWishDto);
    }
    async findLastWishes() {
        const lastWishes = await this.wishesService.findLastWishes();
        return lastWishes;
    }
    async findTopWishes() {
        const topWishes = await this.wishesService.findTopWishes();
        return topWishes;
    }
    async findWishById(id) {
        const wish = await this.wishesService.findWishById(id);
        if (!wish) {
            throw new common_1.NotFoundException('Подарка не существует');
        }
        return wish;
    }
    async updateWish(req, id, updateWishDto) {
        const wish = await this.wishesService.findWishById(id);
        if (wish.owner.id === req.user.id) {
            await this.wishesService.updateWish(id, updateWishDto);
            return;
        }
        else {
            throw new common_1.ForbiddenException({ message: 'Не получится' });
        }
    }
    async deleteWish(req, id) {
        const wish = await this.wishesService.findWishById(id);
        if (wish.owner.id === req.user.id) {
            await this.wishesService.removeWish(id);
            return wish;
        }
        else {
            throw new common_1.ForbiddenException({ message: 'Не получится' });
        }
    }
    async copyWish(req, id) {
        const wish = await this.wishesService.findWishById(id);
        await this.wishesService.updateWish(id, { copied: ++wish.copied });
        const { name, link, image, price, description } = wish;
        if (wish.owner.id !== req.user.id) {
            await this.wishesService.createWish(req.user, {
                name,
                link,
                image,
                price,
                description,
            });
        }
        return {};
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_wish_dto_1.CreateWishDto]),
    __metadata("design:returntype", Promise)
], WishesController.prototype, "createWish", null);
__decorate([
    (0, common_1.UseInterceptors)(wish_interceptor_1.WishInterceptor),
    (0, common_1.Get)('last'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WishesController.prototype, "findLastWishes", null);
__decorate([
    (0, common_1.UseInterceptors)(wish_interceptor_1.WishInterceptor),
    (0, common_1.Get)('top'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WishesController.prototype, "findTopWishes", null);
__decorate([
    (0, common_1.UseInterceptors)(wish_interceptor_1.WishInterceptor),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], WishesController.prototype, "findWishById", null);
__decorate([
    (0, common_1.UseInterceptors)(wish_interceptor_1.WishInterceptor),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, update_wish_dto_1.UpdateWishDto]),
    __metadata("design:returntype", Promise)
], WishesController.prototype, "updateWish", null);
__decorate([
    (0, common_1.UseInterceptors)(wish_interceptor_1.WishInterceptor),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], WishesController.prototype, "deleteWish", null);
__decorate([
    (0, common_1.UseInterceptors)(wish_interceptor_1.WishInterceptor),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, common_1.Post)(':id/copy'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], WishesController.prototype, "copyWish", null);
WishesController = __decorate([
    (0, common_1.Controller)('wishes'),
    __metadata("design:paramtypes", [wishes_service_1.WishesService])
], WishesController);
exports.WishesController = WishesController;
//# sourceMappingURL=wishes.controller.js.map