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
exports.WishesService = void 0;
const common_1 = require("@nestjs/common");
const wish_entity_1 = require("./entities/wish.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let WishesService = class WishesService {
    constructor(wishesRepository) {
        this.wishesRepository = wishesRepository;
    }
    async createWish(user, createWishDto) {
        return await this.wishesRepository.save(Object.assign(Object.assign({}, createWishDto), { owner: user }));
    }
    async findWishById(id) {
        const wish = await this.wishesRepository.findOne({
            relations: {
                owner: { wishes: true, wishlists: true, offers: true },
                offers: { user: true },
            },
            where: { id },
        });
        if (!wish) {
            throw new common_1.NotFoundException('Не существует');
        }
        delete wish.owner.password;
        return wish;
    }
    async findManyWishesById(id) {
        return this.wishesRepository.find({
            where: { id: (0, typeorm_2.In)(id) },
        });
    }
    findWishesByOwner(ownerId) {
        return this.wishesRepository.find({
            where: { owner: { id: ownerId } },
            relations: ['offers', 'owner'],
        });
    }
    async findTopWishes() {
        return this.wishesRepository.find({ take: 10, order: { copied: 'DESC' } });
    }
    async findLastWishes() {
        return this.wishesRepository.find({
            take: 40,
            order: { createdAt: 'DESC' },
        });
    }
    updateWish(id, updateWishDto) {
        return this.wishesRepository.update(id, updateWishDto);
    }
    removeWish(id) {
        return this.wishesRepository.delete({ id });
    }
};
WishesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(wish_entity_1.Wish)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], WishesService);
exports.WishesService = WishesService;
//# sourceMappingURL=wishes.service.js.map