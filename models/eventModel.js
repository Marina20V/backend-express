import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Product = db.define('Events',{
    id:{
        type: DataTypes.INT
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
    date:{
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
    }
});
 
export default Product;
