import { randomUUID } from 'crypto';
import {
    DefaultModel,
    WithOptional,
} from '@src/shared/core/model/default.model';

export class UserModel extends DefaultModel {
    password: string;
    firstName: string;
    lastName: string;
    email: string;

    constructor(data: UserModel) {
        super();
        Object.assign(this, data);
    }

    static create(
        data: WithOptional<
            UserModel,
            'id' | 'createdAt' | 'updatedAt' | 'deletedAt'
        >,
    ): UserModel {
        return new UserModel({
            ...data,
            id: data.id ? data.id : randomUUID(),
            createdAt: data.createdAt ? data.createdAt : new Date(),
            updatedAt: data.updatedAt ? data.updatedAt : new Date(),
            deletedAt: data.deletedAt ? data.deletedAt : null,
        });
    }

    static createFrom(data: UserModel): UserModel {
        return new UserModel(data);
    }
}
