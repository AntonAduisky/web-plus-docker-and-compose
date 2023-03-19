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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishlistsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const wishlist_entity_1 = require("./entities/wishlist.entity");
const typeorm_2 = require("typeorm");
const wishes_service_1 = require("../wishes/wishes.service");
let WishlistsService = class WishlistsService {
    constructor(wishlistsRepository, wishesService) {
        this.wishlistsRepository = wishlistsRepository;
        this.wishesService = wishesService;
    }
    async createWishlist(user, createWishlistDto) {
        const { itemsId } = createWishlistDto, rest = __rest(createWishlistDto, ["itemsId"]);
        const wishes = itemsId.map((id) => ({ id }));
        const wishlist = this.wishlistsRepository.create(Object.assign(Object.assign({}, rest), { owner: user, items: wishes }));
        return this.wishlistsRepository.save(wishlist);
    }
    async findAllWishlists() {
        return this.wishlistsRepository.find({
            relations: ['items', 'owner'],
        });
    }
    async findWishlistById(id) {
        return this.wishlistsRepository.findOne({
            where: { id },
            relations: ['items', 'owner'],
        });
    }
    async updateWishlist(id, updateWishlistDto, userId) {
        const wishlist = await this.findWishlistById(id);
        const wishes = await this.wishesService.findManyWishesById(updateWishlistDto.itemsId || []);
        if (wishlist.owner.id !== userId) {
            throw new common_1.BadRequestException();
        }
        return await this.wishlistsRepository.save(Object.assign(Object.assign({}, wishlist), { name: updateWishlistDto.name, image: updateWishlistDto.image, description: updateWishlistDto.description, items: wishes }));
    }
    async removeWishlistById(id, userId) {
        const wishlist = await this.findWishlistById(id);
        if (wishlist.owner.id !== userId) {
            throw new common_1.BadRequestException();
        }
        await this.wishlistsRepository.delete(id);
        return wishlist;
    }
};
WishlistsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(wishlist_entity_1.Wishlist)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        wishes_service_1.WishesService])
], WishlistsService);
exports.WishlistsService = WishlistsService;
//# sourceMappingURL=wishlists.service.js.map