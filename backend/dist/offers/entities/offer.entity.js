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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Offer = void 0;
const class_validator_1 = require("class-validator");
const user_entity_1 = require("../../users/entities/user.entity");
const default_entity_1 = require("../../utils/default.entity");
const wish_entity_1 = require("../../wishes/entities/wish.entity");
const typeorm_1 = require("typeorm");
let Offer = class Offer extends default_entity_1.DefaultEntity {
};
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.offers),
    __metadata("design:type", user_entity_1.User)
], Offer.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => wish_entity_1.Wish, (wish) => wish.offers),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", wish_entity_1.Wish)
], Offer.prototype, "item", void 0);
__decorate([
    (0, typeorm_1.Column)({
        default: 0,
        scale: 2,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.NotEquals)(0),
    __metadata("design:type", Number)
], Offer.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], Offer.prototype, "hidden", void 0);
Offer = __decorate([
    (0, typeorm_1.Entity)()
], Offer);
exports.Offer = Offer;
//# sourceMappingURL=offer.entity.js.map