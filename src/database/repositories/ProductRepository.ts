import model, { ProductInput, ProductOutput } from '../models/ProductModel';
import AppError from '../../utils/AppError'

export const getAll = async (): Promise<ProductOutput[]> => {
    return await model.findAll();
};

export const getById = async (id: string): Promise<ProductOutput> => {
    const product = await model.findByPk(id);

    if (!product) {
        throw new AppError('NotFoundError', 'Registro não encontrado', 404);
    };

    return product;
};

export const create = async (payload: ProductInput): Promise<ProductOutput> => {
    return await model.create(payload);
};

export const updateById = async (id: string, payload: ProductInput): Promise<ProductOutput> => {
    const product = await model.findByPk(id);

    if (!product) {
        throw new AppError('NotFoundError', 'Registro não encontrado', 404);
    };

    return await product.update(payload);
};

export const deleteById = async (id: string): Promise<void> => {
    const product = await model.findByPk(id);

    if (!product) {
        throw new AppError('NotFoundError', 'Registro não encontrado', 404);
    };

    await product.destroy();
};