import { Request, Response, NextFunction } from 'express';
import userSchemas from '../schemas/userSchemas';

const validateUser = (req: Request, res: Response, next: NextFunction) => {
  const checkUser = userSchemas.userValidation(req.body);
  if (checkUser) {
    return res.status(checkUser.code).json({ message: checkUser.message });
  }
  next();
};

export default {
  validateUser,
};