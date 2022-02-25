import { Product } from '../interfaces/productsInterfaces';
import productModels from '../models/productModels';

const createProduct = async (product: Product): Promise<Product> => {
  const newProduct = await productModels.createProduct(product);
  return newProduct;
};

const getAll = async (): Promise<Product[]> => {
  const products = await productModels.getAll();
  return products;
};

export default {
  createProduct,
  getAll,
};