import model, { OrderInput, OrderOutput } from '../models/OrderModel';
import AppError from '../../utils/AppError'

export const getAll = async (): Promise<OrderOutput[]> => {
    return await model.findAll();
};

export const getById = async (id: number): Promise<OrderOutput> => {
    const order = await model.findByPk(id);

    if (!order) {
        throw new AppError('NotFoundError', 'Registro não encontrado', 404);
    };

    return order;
};

export const create = async (payload: OrderInput): Promise<OrderOutput> => {
    return await model.create(payload);
};

export const updateById = async (id: number, payload: OrderInput): Promise<OrderOutput> => {
    const order = await model.findByPk(id);

    if (!order) {
        throw new AppError('NotFoundError', 'Registro não encontrado', 404);
    };

    return await order.update(payload);
};

export const deleteById = async (id: number): Promise<void> => {
    const order = await model.findByPk(id);

    if (!order) {
        throw new AppError('NotFoundError', 'Registro não encontrado', 404);
    };

    await order.destroy();
};