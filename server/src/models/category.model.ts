import { DataTypes } from "sequelize";
import sequelize from "../configs/db.config";

const Category = sequelize.define("Category", {
  category_id: {
    type: DataTypes.INTEGER,
    unique: true,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.CHAR(50),
    allowNull: false,
  },
});
export default Category;
