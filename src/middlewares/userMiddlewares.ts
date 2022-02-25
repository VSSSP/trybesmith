import { Request, Response, NextFunction } from 'express';
import userSchemas from '../schemas/userSchemas';

const validateUser = (req: Request, res: Response, next: NextFunction) => {
  const checkUser = userSchemas.userValidation(req.body);
  if (checkUser) {
    return res.status(checkUser.code).json({ error: checkUser.message });
  }
  next();
};

const validateLogin = async (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;
  const checkLogin = await userSchemas.loginValidation(username, password);
  if (checkLogin) {
    return res.status(checkLogin.code).json({ error: checkLogin.message });
  }
  next();
};

export default {
  validateUser,
  validateLogin,
};