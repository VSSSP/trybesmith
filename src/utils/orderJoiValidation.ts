import Joi from 'joi';

const orderJoiValidation = Joi.array().items(Joi.number()).min(1).required()
  .messages({
    'any.required': 'Products is required',
    'array.base': 'Products must be an array of numbers',
    'array.min': 'Products can\'t be empty',
  });

export default orderJoiValidation;