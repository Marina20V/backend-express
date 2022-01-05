import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Product = db.define('Events',{
    id:{
        type: DataTypes.INT
    },
    price:{
        type: DataTypes.DOUBLE
    },
    id:{
        type: DataTypes.INT
    },
    price:{
        type: DataTypes.DOUBLE
    },
    id:{
        type: DataTypes.INT
    },
    price:{
        type: DataTypes.DOUBLE
    }
},{
    freezeTableName: true
});
 
export default Product;
