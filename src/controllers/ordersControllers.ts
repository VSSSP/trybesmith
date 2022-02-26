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

export default {
  createOrder,
};
