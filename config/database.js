import { Sequelize } from "sequelize";
 
const db = new Sequelize('EventsSql', 'marina_v', '', {
    host: "localhost",
    user: "marina_v",
    password: 'superroot',
    dialect: "mysql",
});

 
export default db;
