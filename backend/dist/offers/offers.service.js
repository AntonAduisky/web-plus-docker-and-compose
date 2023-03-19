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
exports.OffersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const wishes_service_1 = require("../wishes/wishes.service");
const typeorm_2 = require("typeorm");
const offer_entity_1 = require("./entities/offer.entity");
let OffersService = class OffersService {
    constructor(offersRepository, wishesService) {
        this.offersRepository = offersRepository;
        this.wishesService = wishesService;
    }
    async findAllOffers() {
        return this.offersRepository.find({ relations: ['item', 'user'] });
    }
    async findOfferById(id) {
        return this.offersRepository.findOne({
            where: { id },
            relations: ['item', 'user'],
        });
    }
    async createOffer(user, createOfferDto) {
        const wish = await this.wishesService.findWishById(createOfferDto.itemId);
        if (createOfferDto.amount < 0) {
            throw new common_1.BadRequestException('Cумма должна быть больше 0');
        }
        if (user.id === wish.owner.id) {
            throw new common_1.BadRequestException('Не получится скинуться самому себе');
        }
        if (createOfferDto.amount > wish.price - wish.raised) {
            throw new common_1.BadRequestException('Сумма собранных средств не может превышать стоимость подарка');
        }
        await this.wishesService.updateWish(wish.id, {
            raised: wish.raised + createOfferDto.amount,
        });
        const offer = this.offersRepository.create(Object.assign(Object.assign({}, createOfferDto), { user, item: wish }));
        return await this.offersRepository.save(offer);
    }
};
OffersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(offer_entity_1.Offer)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        wishes_service_1.WishesService])
], OffersService);
exports.OffersService = OffersService;
//# sourceMappingURL=offers.service.js.map