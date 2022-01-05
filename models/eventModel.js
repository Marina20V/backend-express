import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Event = db.define('Events',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    title:{
        type: DataTypes.STRING
    },
    full_desc:{
        type: DataTypes.STRING
    },
    location:{
        type: DataTypes.STRING
    },
    date:{
        type: DataTypes.STRING
    },
    cat_id:{
        type: DataTypes.STRING
    },
    organizer_id:{
        type: DataTypes.STRING
    },
    subcat_type:{
        type: DataTypes.STRING
    },
    subcat_entry:{
        type: DataTypes.STRING
    },
    img:{
        type: DataTypes.STRING
    },
    createdAt:{
        type: DataTypes.STRING
    },
    updatedAt:{
        type: DataTypes.STRING
    },
});
 
export default Event;
