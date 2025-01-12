import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../../user.service';

describe('UsersController', () => {
    let controller: UserService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [UserService],
        }).compile();

        controller = module.get<UserService>(UserService);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
