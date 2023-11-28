import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "demo",
    password: "demo",
    database: "demo",
    synchronize: true,
    logging: false,
})