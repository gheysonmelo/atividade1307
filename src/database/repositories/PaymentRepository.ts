import model, { PaymentInput, PaymentOutput } from '../models/PaymentModel';
import AppError from '../../utils/AppError'

export const getAll = async (): Promise<PaymentOutput[]> => {
    return await model.findAll();
};

export const getById = async (id: string): Promise<PaymentOutput> => {
    const payment = await model.findByPk(id);

    if (!payment) {
        throw new AppError('NotFoundError', 'Registro não encontrado', 404);
    };

    return payment;
};

export const create = async (payload: PaymentInput): Promise<PaymentOutput> => {
    return await model.create(payload);
};

export const updateById = async (id: string, payload: PaymentInput): Promise<PaymentOutput> => {
    const payment = await model.findByPk(id);

    if (!payment) {
        throw new AppError('NotFoundError', 'Registro não encontrado', 404);
    };

    return await payment.update(payload);
};

export const deleteById = async (id: string): Promise<void> => {
    const payment = await model.findByPk(id);

    if (!payment) {
        throw new AppError('NotFoundError', 'Registro não encontrado', 404);
    };

    await payment.destroy();
};