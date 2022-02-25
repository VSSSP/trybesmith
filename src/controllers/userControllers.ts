import { Request, Response } from 'express';
import usersServices from '../services/usersServices';

const getAll = async (req: Request, res: Response) => {
  const users = await usersServices.getAll();
  res.status(200).json(users);
};

export default {
  getAll,
};