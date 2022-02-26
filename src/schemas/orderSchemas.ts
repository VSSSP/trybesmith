import orderJoiValidation from '../utils/orderJoiValidation';

const orderValidation = (order: []) => {
  const { error } = orderJoiValidation.validate(order);
  const typeOferror = error?.details[0].type;
  if (error) return { code: typeOferror === 'any.required' ? 400 : 422, message: error.message };
  return false;
};

export default {
  orderValidation,
};