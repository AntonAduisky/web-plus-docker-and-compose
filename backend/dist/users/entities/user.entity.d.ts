import { DefaultEntity } from '../../utils/default.entity';
import { Wish } from 'src/wishes/entities/wish.entity';
import { Offer } from 'src/offers/entities/offer.entity';
import { Wishlist } from 'src/wishlists/entities/wishlist.entity';
export declare class User extends DefaultEntity {
    username: string;
    about: string;
    email: string;
    password: string;
    avatar: string;
    wishes: Array<Wish>;
    offers: Array<Offer>;
    wishlists: Array<Wishlist>;
}
