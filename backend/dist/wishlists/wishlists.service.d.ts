import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';
import { Wishlist } from './entities/wishlist.entity';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { WishesService } from 'src/wishes/wishes.service';
export declare class WishlistsService {
    private readonly wishlistsRepository;
    private readonly wishesService;
    constructor(wishlistsRepository: Repository<Wishlist>, wishesService: WishesService);
    createWishlist(user: User, createWishlistDto: CreateWishlistDto): Promise<Wishlist>;
    findAllWishlists(): Promise<Wishlist[]>;
    findWishlistById(id: number): Promise<Wishlist>;
    updateWishlist(id: number, updateWishlistDto: UpdateWishlistDto, userId: number): Promise<Wishlist>;
    removeWishlistById(id: number, userId: number): Promise<Wishlist>;
}
