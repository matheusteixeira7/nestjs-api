import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '@src/shared/module/persistence/prisma.service';
import { ConfigService } from '@src/shared/module/config/config.service';
import { UserService } from '@src/module/user/user.service';
import { UserRepository } from '@src/module/user/user.repository';

describe('UserService', () => {
    let service: UserService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UserService,
                UserRepository,
                PrismaService,
                ConfigService,
            ],
        }).compile();

        service = module.get<UserService>(UserService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
