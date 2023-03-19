import { WishesService } from './wishes.service';
import { CreateWishDto } from './dto/create-wish.dto';
import { UpdateWishDto } from './dto/update-wish.dto';
import { Wish } from './entities/wish.entity';
export declare class WishesController {
    private readonly wishesService;
    constructor(wishesService: WishesService);
    createWish(req: any, createWishDto: CreateWishDto): Promise<Wish>;
    findLastWishes(): Promise<Wish[]>;
    findTopWishes(): Promise<Wish[]>;
    findWishById(id: number): Promise<Wish>;
    updateWish(req: any, id: number, updateWishDto: UpdateWishDto): Promise<Wish>;
    deleteWish(req: any, id: number): Promise<Wish>;
    copyWish(req: any, id: number): Promise<{}>;
}
