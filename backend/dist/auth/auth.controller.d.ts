import { CreateUserDto } from '../users/dto/create-user.dto';
import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    private readonly usersService;
    constructor(authService: AuthService, usersService: UsersService);
    signup(user: CreateUserDto): Promise<{
        access_token: string;
    }>;
    signin(req: any): {
        access_token: string;
    };
}
