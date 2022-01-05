import { Sequelize } from "sequelize";
 
const db = new Sequelize('EventsSql', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;
