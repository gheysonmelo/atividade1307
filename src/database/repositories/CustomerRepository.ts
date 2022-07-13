import model, { CustomerInput, CustomerOutput } from '../models/CustomerModel';
import AppError from '../../utils/AppError'

export const getAll = async (): Promise<CustomerOutput[]> => {
    return await model.findAll();
};

export const getById = async (id: number): Promise<CustomerOutput> => {
    const customer = await model.findByPk(id);

    if (!customer) {
        throw new AppError('NotFoundError', 'Registro não encontrado', 404);
    };

    return customer;
};

export const create = async (payload: CustomerInput): Promise<CustomerOutput> => {
    return await model.create(payload);
};

export const updateById = async (id: number, payload: CustomerInput): Promise<CustomerOutput> => {
    const customer = await model.findByPk(id);

    if (!customer) {
        throw new AppError('NotFoundError', 'Registro não encontrado', 404);
    };

    return await customer.update(payload);
};

export const deleteById = async (id: number): Promise<void> => {
    const customer = await model.findByPk(id);

    if (!customer) {
        throw new AppError('NotFoundError', 'Registro não encontrado', 404);
    };

    await customer.destroy();
};