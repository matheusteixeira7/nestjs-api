import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Public } from '../auth/decorators/public.decorator';
import { UserModel } from './model/user.model';
import { omit } from 'lodash';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Public()
    @Post()
    async signupUser(@Body() userData: CreateUserDto): Promise<void> {
        this.usersService.createUser(userData);
    }

    @Get(':id')
    async findOneById(
        @Param() params: { id: string },
    ): Promise<Omit<UserModel, 'password'>> {
        const user = await this.usersService.findOneById(params.id);
        return omit(user, ['password']);
    }
}
