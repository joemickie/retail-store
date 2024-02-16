import { Model, DataTypes } from 'sequelize';
import { sequelize } from 'src/dbConnection/sequelize';
import Order from './order.model'; // Import Order model

class Transaction extends Model {
    public id!: number;
    public orderId!: number;
    public paymentGatewayTransactionId?: string;
    public amount!: number;
    public status!: string;
    public readonly createdAt!: Date;
}

Transaction.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    orderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Order,
            key: 'id',
        },
    },
    paymentGatewayTransactionId: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    amount: {
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
    tableName: 'transactions',
});

export default Transaction;
