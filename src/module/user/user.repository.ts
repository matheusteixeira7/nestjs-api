import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UserModel } from './model/user.model';
import { DefaultPrismaRepository } from 'src/shared/module/persistence/default.prisma.repository';
import { PrismaService } from 'src/shared/module/persistence/prisma.service';

type QueryableFields = Prisma.$UserPayload['scalars'];

@Injectable()
export class UserRepository extends DefaultPrismaRepository {
    private readonly model: PrismaService['user'];
    constructor(prismaService: PrismaService) {
        super();
        this.model = prismaService.user;
    }

    async save(user: UserModel): Promise<void> {
        try {
            await this.model.create({
                data: user,
            });
        } catch (error) {
            this.handleAndThrowError(error);
        }
    }

    async findOneBy(
        fields: Partial<QueryableFields>,
    ): Promise<UserModel | undefined> {
        try {
            const user = await this.model.findFirst({
                where: fields,
            });
            if (!user) {
                return;
            }

            return UserModel.createFrom(user);
        } catch (error) {
            this.handleAndThrowError(error);
        }
    }

    async clear(): Promise<{ count: number }> {
        try {
            return await this.model.deleteMany();
        } catch (error) {
            this.handleAndThrowError(error);
        }
    }
}
