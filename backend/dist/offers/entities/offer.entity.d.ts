import { User } from 'src/users/entities/user.entity';
import { DefaultEntity } from 'src/utils/default.entity';
import { Wish } from 'src/wishes/entities/wish.entity';
export declare class Offer extends DefaultEntity {
    user: User;
    item: Wish;
    amount: number;
    hidden: boolean;
}
