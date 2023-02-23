import { User } from './../users/entities/user.entity';
export declare const hash: (password: string) => Promise<string>;
export declare const compare: (password: string, user: User) => Promise<User>;
