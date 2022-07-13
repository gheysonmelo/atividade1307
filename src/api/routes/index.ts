import { Router } from 'express'
import customers from './CustomerRoute';
import employees from './EmployeeRoute';
import offices from './OfficeRoute';
import orderdetails from './OrderDetailRoute';
import orders from './OrderRoute';
import payments from './PaymentRoute';
import productlines from './ProductLineRoute';
import products from './ProductRoute';

const routes = Router();

routes.use('/customers', customers);
routes.use('/employees', employees);
routes.use('/offices', offices);
routes.use('/orderdetails', orderdetails);
routes.use('/orders', orders);
routes.use('/payments', payments);
routes.use('/productlines', productlines);
routes.use('/products', products);

export default routes;