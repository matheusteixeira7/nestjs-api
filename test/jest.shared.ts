export default {
    moduleFileExtensions: ['js', 'json', 'ts'],
    rootDir: '..',
    testEnvironment: 'node',
    moduleNameMapper: {
        '^@src/(.*)$': '<rootDir>/src/$1',
        '^@database/(.*)$': '<rootDir>/database/$1',
        '^@testInfra/(.*)$': '<rootDir>/test/$1',
    },
    transform: {
        '^.+\\.(t|j)s?$': ['@swc/jest'],
    },
    setupFiles: ['<rootDir>/test/jest.setup.ts'],
    verbose: true,
    resetMocks: true,
};
