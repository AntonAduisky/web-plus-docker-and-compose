import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    createUser(createUserDto: CreateUserDto): Promise<User>;
    findUserById(id: number): Promise<User>;
    findUserByUsername(username: string): Promise<User>;
    findManyUsers(user: any): Promise<User[]>;
    updateUserById(id: number, updateUserDto: UpdateUserDto): Promise<User>;
}
