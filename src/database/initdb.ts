import Customer from "./models/CustomerModel";
import Employee from "./models/EmployeeModel";
import Office from "./models/OfficeModel";
import OrderDetail from "./models/OrderDetailModel";
import Order from "./models/OrderModel";
import Payment from "./models/PaymentModel";
import ProductLine from "./models/ProductLineModel";
import Product from "./models/ProductModel";

export const initdb = async () => {
    console.log('Sincronizando as tabelas...');
    Promise.all([
        await Order.sync({alter: true}),
        await OrderDetail.sync({alter: true}),
        await Payment.sync({alter: true}),
        await Customer.sync({alter: true}),
        await Product.sync({alter: true}),
        await ProductLine.sync({alter: true}),
        await Office.sync({alter: true}),
        await Employee.sync({alter: true}),
    ]).then(()=> {
        console.log("Tabelas sincronizadas com sucesso")
    })
};