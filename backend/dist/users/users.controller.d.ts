import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { WishesService } from 'src/wishes/wishes.service';
import { User } from './entities/user.entity';
import { Wish } from 'src/wishes/entities/wish.entity';
export declare class UsersController {
    private readonly usersService;
    private readonly wishesService;
    constructor(usersService: UsersService, wishesService: WishesService);
    getMyProfile(req: any): Promise<User>;
    findUserByUsername(username: string): Promise<User>;
    findMyWishes(req: any): Promise<Wish[]>;
    findWishesByUsername(username: string): Promise<Wish[]>;
    findManyUsers(user: any): Promise<User[]>;
    updateMyProfile(req: any, updateUserDto: UpdateUserDto): Promise<User>;
}
