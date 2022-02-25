import Joi from 'joi';

const username = Joi.string().min(3).required().messages({
  'any.required': 'Username is required',
  'string.min': 'Username must be longer than 2 characters',
  'string.base': 'Username must be a string',
});

const classe = Joi.string().min(3).required().messages({
  'any.required': 'Classe is required',
  'string.min': 'Classe must be longer than 2 characters',
  'string.base': 'Classe must be a string',
});

const level = Joi.number().min(1).required().messages({
  'any.required': 'Level is required',
  'number.min': 'Level must be greater than 0',
  'number.base': 'Level must be a number',
});

const password = Joi.string().min(8).required().messages({
  'any.required': 'Password is required',
  'string.min': 'Password must be longer than 7 characters',
  'string.base': 'Password must be a string',
});

export const userJoiValidation = Joi.object({
  username,
  classe,
  level,
  password,
});

export const loginJoiValidation = Joi.object({
  username,
  password,
});
