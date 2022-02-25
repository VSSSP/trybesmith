import Joi from 'joi';
import { User } from '../interfaces/usersInterfaces';

const userJoiValidation = Joi.object({
  username: Joi.string().min(2).required(),
  classe: Joi.string().min(2).required(),
  level: Joi.number().min(1).required(),
  password: Joi.string().min(7).required(),
});

const userValidation = (user: User) => {
  const { error } = userJoiValidation.validate(user);
  if (error) return { code: 422, message: error.message };
  return false;
};

export default {
  userValidation,
};