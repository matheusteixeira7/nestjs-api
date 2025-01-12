import { z } from 'zod';

export const environmentSchema = z.enum(['test', 'development', 'production']);

const databaseSchema = z.object({
    host: z.string(),
    database: z.string(),
    password: z.string(),
    port: z.coerce.number(),
    url: z.string().startsWith('postgresql://'),
    username: z.string(),
});

const jwtSecret = z.string().min(1);

export const configSchema = z.object({
    env: environmentSchema,
    port: z.coerce.number().positive().int(),
    database: databaseSchema,
    jwtSecret,
});
