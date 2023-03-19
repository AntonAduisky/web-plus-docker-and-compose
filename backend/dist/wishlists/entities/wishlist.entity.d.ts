import { User } from 'src/users/entities/user.entity';
import { Wish } from 'src/wishes/entities/wish.entity';
import { DefaultEntity } from 'src/utils/default.entity';
export declare class Wishlist extends DefaultEntity {
    name: string;
    description: string;
    image: string;
    owner: User;
    items: Array<Wish>;
}
