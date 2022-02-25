import { Product } from '../interfaces/productsInterfaces';
import productModels from '../models/productModels';

const createProduct = async (product: Product): Promise<Product> => {
  const newProduct = await productModels.createProduct(product);
  return newProduct;
};

export default {
  createProduct,
};