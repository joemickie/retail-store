import { Table, Model, DataType } from 'sequelize-typescript';
import { sequelize } from 'src/dbConnection/sequelize';

@Table({ tableName: 'customers', modelName: 'Customer' })
class Customer extends Model {
    public id!: number;
    public name!: string;
    public email!: string;
    public readonly createdAt!: Date;
}

Customer.init({
    id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataType.STRING,
        allowNull: false,
    },
    email: {
        type: DataType.STRING,
        allowNull: false,
        unique: true,
    },
    createdAt: {
        type: DataType.DATE,
        allowNull: false,
        defaultValue: DataType.NOW,
    },
}, {
    sequelize,
    tableName: 'customers',
    modelName: 'Customer',
});

export default Customer;
