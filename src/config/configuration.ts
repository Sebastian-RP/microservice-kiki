export default() => ({
    database: {
        type: 'postgres',
        host: process.env.DATABASE_HOST || 'localhost', //Nombre del servicio de base de datos en Docker
        port: process.env.DATABASE_PORT || 5432,
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        name: process.env.DATABASE_NAME,
        ssl: process.env.DATABASE_SSL || false
    }
})