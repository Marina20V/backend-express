import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Category = db.define('Categories',{
    cat_id:{
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    cat_iname:{
        type: DataTypes.STRING,
    },
    cat_name:{
        type: DataTypes.STRING
    },
    createdAt:{
        type: DataTypes.STRING
    },
    updatedAt:{
        type: DataTypes.STRING
    },
});
 
export default Category;
