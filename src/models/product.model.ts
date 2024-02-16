import { Model, DataTypes } from 'sequelize';
import { sequelize } from 'src/dbConnection/sequelize';

class Product extends Model {
    public id!: number;
    public name!: string;
    public price!: number;
    public description?: string;
    public readonly createdAt!: Date;
}

Product.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
}, {
    sequelize,
    tableName: 'products',
});

export default Product;
