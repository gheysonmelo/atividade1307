import { DataTypes, Model, Optional } from 'sequelize';
import  sequelize  from '../sequelize';
import Customer from './CustomerModel';

interface PaymentAttributes {
    customerNumber: number,
    checkNumber: string,
    paymentDate: string,
    amount: number,
};

export interface PaymentInput extends Optional<PaymentAttributes, 'checkNumber'>{};
export interface PaymentOutput extends Required<PaymentAttributes>{};

class Payment extends Model<PaymentAttributes, PaymentInput> {
    declare customerNumber: number;
    declare checkNumber: string;
    declare paymentDate: string;
    declare amount: number;
};

Payment.init({
    customerNumber: { type: DataTypes.INTEGER, allowNull: false },
    checkNumber: { type: DataTypes.STRING,  primaryKey: true, },
    paymentDate: { type: DataTypes.DATEONLY, allowNull: false },
    amount: { type: DataTypes.FLOAT, allowNull: false },
}, {
    sequelize,
    modelName: 'payments'
});

Customer.hasMany(Payment, {foreignKey: "customerNumber"} );
Payment.belongsTo(Customer, {foreignKey: "customerNumber"} );

export default Payment;