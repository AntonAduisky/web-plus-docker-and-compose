import { CreateWishDto } from './dto/create-wish.dto';
import { UpdateWishDto } from './dto/update-wish.dto';
import { Wish } from './entities/wish.entity';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
export declare class WishesService {
    private readonly wishesRepository;
    constructor(wishesRepository: Repository<Wish>);
    createWish(user: User, createWishDto: CreateWishDto): Promise<Wish>;
    findWishById(id: number): Promise<Wish>;
    findManyWishesById(id: number[]): Promise<Wish[]>;
    findWishesByOwner(ownerId: number): Promise<Wish[]>;
    findTopWishes(): Promise<Wish[]>;
    findLastWishes(): Promise<Wish[]>;
    updateWish(id: number, updateWishDto: UpdateWishDto): Promise<import("typeorm").UpdateResult>;
    removeWish(id: number): Promise<import("typeorm").DeleteResult>;
}
