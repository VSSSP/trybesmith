import { JwtPayload } from 'jsonwebtoken';
import { Request, Response } from 'express';
import ordersServices from '../services/ordersServices';
import jwt from '../utils/jwt';
import userModels from '../models/userModels';

const createOrder = async (req: Request, res: Response) => {
  const { username } = jwt.verifyToken(req.headers.authorization as string) as JwtPayload;
  const { id } = await userModels.getUser(username);
  const order = await ordersServices.createOrder(id, req.body.products);
  res.status(201).json({ order });
};

const getOrderById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const order = await ordersServices.getOrderById(id);
  console.log(order);
  res.status(200).json(order);
};

const getAll = async (_req: Request, res: Response) => {
  const orders = await ordersServices.getAll();
  console.log(orders);
  res.status(200).json(orders);
};

export default {
  createOrder,
  getOrderById,
  getAll,
};
