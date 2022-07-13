import { ProductInput, ProductOutput } from '../database/models/ProductModel';
import * as repository from '../database/repositories/ProductRepository';

export const getAll = async (): Promise<ProductOutput[]> => {
    return repository.getAll();
};

export const getById = async (id: string): Promise<ProductOutput> => {
    return await repository.getById(id);
};

export const create = async (payload: ProductInput): Promise<ProductOutput> => {
    return await repository.create(payload)
};

export const updateById = async (id: string, payload: ProductInput): Promise<ProductOutput> => {
    return await repository.updateById(id, payload);
};

export const deleteById = async (id: string): Promise<void> => {
    return await repository.deleteById(id);
};