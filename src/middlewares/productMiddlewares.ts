import { Request, Response, NextFunction } from 'express';
import productSchemas from '../schemas/productSchemas';

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization; 
  const checkToken = productSchemas.tokenValidation(token as string);
  if (checkToken) {
    return res.status(checkToken.code).json({ error: checkToken.message });
  }
  next();
};

const validateProduct = (req: Request, res: Response, next: NextFunction) => {
  const checkProduct = productSchemas.productValidation(req.body);
  if (checkProduct) {
    return res.status(checkProduct.code).json({ error: checkProduct.message });
  }
  next();
};

export default {
  validateToken,
  validateProduct,
};