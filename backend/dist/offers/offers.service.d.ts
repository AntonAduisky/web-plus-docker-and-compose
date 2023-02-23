import { CreateOfferDto } from './dto/create-offer.dto';
import { User } from 'src/users/entities/user.entity';
import { WishesService } from 'src/wishes/wishes.service';
import { Repository } from 'typeorm';
import { Offer } from './entities/offer.entity';
export declare class OffersService {
    private readonly offersRepository;
    private readonly wishesService;
    constructor(offersRepository: Repository<Offer>, wishesService: WishesService);
    findAllOffers(): Promise<Offer[]>;
    findOfferById(id: number): Promise<Offer>;
    createOffer(user: User, createOfferDto: CreateOfferDto): Promise<Offer>;
}
