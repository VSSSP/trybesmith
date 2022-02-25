import Joi from 'joi';
import { User } from '../interfaces/usersInterfaces';

const userJoiValidation = Joi.object({
  username: Joi.string().min(3).required().messages({
    'any.required': 'Username is required',
    'string.min': 'Username must be longer than 2 characters',
    'string.base': 'Username must be a string',
  }),
  classe: Joi.string().min(3).required().messages({
    'any.required': 'Classe is required',
    'string.min': 'Classe must be longer than 2 characters',
    'string.base': 'Classe must be a string',
  }),
  level: Joi.number().min(1).required().messages({
    'any.required': 'Level is required',
    'number.min': 'Level must be greater than 0',
    'number.base': 'Level must be a number',
  }),
  password: Joi.string().min(8).required().messages({
    'any.required': 'Password is required',
    'string.min': 'Password must be longer than 7 characters',
    'string.base': 'Password must be a string',
  }),
});

const userValidation = (user: User) => {
  const { error } = userJoiValidation.validate(user);
  const typeOferror = error?.details[0].type;
  if (error) return { code: typeOferror === 'any.required' ? 400 : 422, message: error.message };
  if (typeof user.level !== 'number') return { code: 422, message: 'Level must be a number' };
  return false;
};

export default {
  userValidation,
};