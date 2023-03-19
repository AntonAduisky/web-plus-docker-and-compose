import { WishlistsService } from './wishlists.service';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';
import { Wishlist } from './entities/wishlist.entity';
import { User } from 'src/users/entities/user.entity';
export declare class WishlistsController {
    private readonly wishlistsService;
    constructor(wishlistsService: WishlistsService);
    findAllWishlists(): Promise<Wishlist[]>;
    createWishlist(req: any, createWishlistDto: CreateWishlistDto): Promise<Wishlist>;
    findWishlistById(id: number): Promise<Wishlist>;
    updateWishlistById({ user }: {
        user: User;
    }, id: number, updateWishlistDto: UpdateWishlistDto): Promise<Wishlist>;
    removeWishlistById({ user }: {
        user: User;
    }, id: number): Promise<Wishlist>;
}
