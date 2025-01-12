import { UserModel } from '@src/module/user/model/user.model';

describe('UserModel', () => {
    describe('constructor', () => {
        it('should create an instance with all provided properties', () => {
            const data = {
                id: '123',
                password: 'password123',
                firstName: 'John',
                lastName: 'Doe',
                email: 'john.doe@example.com',
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            };

            const user = new UserModel(data);

            expect(user).toEqual(data);
        });
    });

    describe('create', () => {
        it('should create a new user with default id, createdAt, and updatedAt', () => {
            const data = {
                password: 'password123',
                firstName: 'John',
                lastName: 'Doe',
                email: 'john.doe@example.com',
            };

            const user = UserModel.create(data);

            expect(user).toMatchObject({
                password: data.password,
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                deletedAt: null,
            });

            expect(user.id).toBeDefined();
            expect(user.createdAt).toBeInstanceOf(Date);
            expect(user.updatedAt).toBeInstanceOf(Date);
        });

        it('should use provided id, createdAt, updatedAt, and deletedAt if available', () => {
            const customDate = new Date('2025-01-01');
            const data = {
                id: 'custom-id',
                password: 'password123',
                firstName: 'John',
                lastName: 'Doe',
                email: 'john.doe@example.com',
                createdAt: customDate,
                updatedAt: customDate,
                deletedAt: customDate,
            };

            const user = UserModel.create(data);

            expect(user).toMatchObject(data);
        });
    });

    describe('createFrom', () => {
        it('should create a new user instance from an existing user model', () => {
            const existingUser = {
                id: '123',
                password: 'password123',
                firstName: 'John',
                lastName: 'Doe',
                email: 'john.doe@example.com',
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            };

            const user = UserModel.createFrom(existingUser);

            expect(user).toEqual(existingUser);
            expect(user).not.toBe(existingUser); // Ensure it's a new instance
        });
    });
});
