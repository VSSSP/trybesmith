import { Request, Response } from 'express';
import productsServices from '../services/productsServices';

const createProduct = async (req: Request, res: Response) => {
  const newProduct = await productsServices.createProduct(req.body);
  res.status(201).json({ item: newProduct });
};

const getAll = async (req: Request, res: Response) => {
  const products = await productsServices.getAll();
  res.status(200).json(products);
};

export default {
  createProduct,
  getAll,
};