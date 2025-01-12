import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PersistenceModule } from 'src/shared/module/persistence/persistence.module';
import { UserRepository } from './user.repository';

@Module({
    imports: [PersistenceModule],
    providers: [UsersService, UserRepository],
    controllers: [UsersController],
    exports: [UsersService],
})
export class UsersModule {}
