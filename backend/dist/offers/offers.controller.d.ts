import { OffersService } from './offers.service';
import { CreateOfferDto } from './dto/create-offer.dto';
import { Offer } from './entities/offer.entity';
export declare class OffersController {
    private readonly offersService;
    constructor(offersService: OffersService);
    createOffer(req: any, createOfferDto: CreateOfferDto): Promise<Offer>;
    findAllOffers(): Promise<Offer[]>;
    findOfferById(id: number): Promise<Offer>;
}
