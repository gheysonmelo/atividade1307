import model, { OfficeInput, OfficeOutput } from '../models/OfficeModel';
import AppError from '../../utils/AppError'

export const getAll = async (): Promise<OfficeOutput[]> => {
    return await model.findAll();
};

export const getById = async (id: string): Promise<OfficeOutput> => {
    const office = await model.findByPk(id);

    if (!office) {
        throw new AppError('NotFoundError', 'Registro não encontrado', 404);
    };

    return office;
};

export const create = async (payload: OfficeInput): Promise<OfficeOutput> => {
    return await model.create(payload);
};

export const updateById = async (id: string, payload: OfficeInput): Promise<OfficeOutput> => {
    const office = await model.findByPk(id);

    if (!office) {
        throw new AppError('NotFoundError', 'Registro não encontrado', 404);
    };

    return await office.update(payload);
};

export const deleteById = async (id: string): Promise<void> => {
    const office = await model.findByPk(id);

    if (!office) {
        throw new AppError('NotFoundError', 'Registro não encontrado', 404);
    };

    await office.destroy();
};