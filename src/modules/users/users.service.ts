import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserModel } from './model/user.model';
import { UserRepository } from './user.repository';

@Injectable()
export class UsersService {
    constructor(private userRepo: UserRepository) {}

    async createUser(data: CreateUserDto): Promise<void> {
        const user = UserModel.create(data);
        await this.userRepo.save(user);
    }

    async findOneById(id: string): Promise<UserModel> {
        const user = await this.userRepo.findOneBy({
            id,
        });

        if (!user) {
            throw new Error('User not found');
        }

        return user;
    }

    async findOneByEmail(email: string): Promise<UserModel> {
        const user = await this.userRepo.findOneBy({
            email,
        });

        if (!user) {
            throw new Error('User not found');
        }

        return user;
    }
}
