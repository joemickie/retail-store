import { Model, DataTypes } from 'sequelize';
import { sequelize } from 'src/dbConnection/sequelize'; 
import Customer from './customer.model';

class Order extends Model {
    public id!: number;
    public customerId!: number;
    public totalAmount!: number;
    public status!: string;
    public readonly createdAt!: Date;
}

Order.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    customerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Customer,
            key: 'id',
        },
    },
    totalAmount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
}, {
    sequelize,
    tableName: 'orders',
});

export default Order;
