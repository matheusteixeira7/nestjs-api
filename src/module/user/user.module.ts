import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PersistenceModule } from 'src/shared/module/persistence/persistence.module';
import { UserRepository } from './user.repository';

@Module({
    imports: [PersistenceModule],
    providers: [UserService, UserRepository],
    controllers: [UserController],
    exports: [UserService],
})
export class UserModule {}
