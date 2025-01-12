export default () => ({
    port: parseInt(process.env.PORT || '3000', 10),
    database: {
        url: process.env.DATABASE_URL,
    },
    JWT_SECRET: process.env.JWT_SECRET,
});
