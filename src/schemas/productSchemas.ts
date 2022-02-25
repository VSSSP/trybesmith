import { Product } from '../interfaces/productsInterfaces';
import productJoiValidation from '../utils/productJoiValidation';
import jwt from '../utils/jwt';

const productValidation = (product: Product) => {
  const { error } = productJoiValidation.validate(product);
  const typeOferror = error?.details[0].type;
  if (error) return { code: typeOferror === 'any.required' ? 400 : 422, message: error.message };
  return false;
};

const tokenValidation = (token: string) => {
  if (!token) return { code: 401, message: 'Token not found' };
  try { 
    jwt.verifyToken(token);
  } catch (error) {
    return { code: 401, message: 'Invalid token' };
  }
  return false;
};

export default {
  productValidation,
  tokenValidation,
};