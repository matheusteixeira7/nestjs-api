import { Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { Public } from 'src/modules/auth/decorators/public.decorator';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Public()
    @Post()
    private async createUser(createUserDto: CreateUserDto): Promise<void> {
        this.usersService.createUser(createUserDto);
    }
}
