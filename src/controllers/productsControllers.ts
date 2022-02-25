import { Request, Response } from 'express';
import productsServices from '../services/productsServices';

const createProduct = async (req: Request, res: Response) => {
  const newProduct = await productsServices.createProduct(req.body);
  res.status(201).json({ item: newProduct });
};

export default {
  createProduct,
};