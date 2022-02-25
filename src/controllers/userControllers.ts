import { Request, Response } from 'express';
import usersServices from '../services/usersServices';
import jwt from '../jwt';

const getAll = async (req: Request, res: Response) => {
  const users = await usersServices.getAll();
  res.status(200).json(users);
};

const createUser = async (req: Request, res: Response) => {
  const newUser = await usersServices.createUser(req.body);
  const { id, username } = newUser;
  const token = jwt.createUser(id, username);
  res.status(201).json({ token });
};

export default {
  getAll,
  createUser,
};