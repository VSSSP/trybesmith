import { Request, Response, NextFunction } from 'express';
import orderSchemas from '../schemas/orderSchemas';

const createOrder = (req: Request, res: Response, next: NextFunction) => {
  const { products } = req.body;
  const checkOrder = orderSchemas.orderValidation(products);
  if (checkOrder) {
    return res.status(checkOrder.code).json({ error: checkOrder.message });
  }
  next();
};

export default {
  createOrder,
};