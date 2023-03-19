import { Offer } from 'src/offers/entities/offer.entity';
import { User } from 'src/users/entities/user.entity';
import { DefaultEntity } from 'src/utils/default.entity';
export declare class Wish extends DefaultEntity {
    name: string;
    link: string;
    image: string;
    price: number;
    raised: number;
    owner: User;
    description: string;
    offers: Array<Offer>;
    copied: number;
}
