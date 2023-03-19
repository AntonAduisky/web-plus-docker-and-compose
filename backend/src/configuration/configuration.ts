export default () => ({
  port: parseInt(process.env.SERVER_PORT, 10) || 4000,
  database: {
    host: process.env.POSTGRES_HOST || 'localhost',
    port: parseInt(process.env.POSTGRES_PORT, 10) || 5432,
    database: process.env.POSTGRES_DB || 'kupipodariday',
    username: process.env.POSTGRES_USER || 'student',
    password: process.env.POSTGRES_PASSWORD || 'student',
    POSTGRES_SYNCHRONIZE: Boolean(process.env.POSTGRES_SYNCHRONIZE) || true,
  },
  JWT_SECRET: process.env.JWT_SECRET,
});
