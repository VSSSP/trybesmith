import ordersModels from '../models/ordersModels';
import orderJoiValidation from '../utils/orderJoiValidation';

const orderValidation = (order: []) => {
  const { error } = orderJoiValidation.validate(order);
  const typeOferror = error?.details[0].type;
  if (error) return { code: typeOferror === 'any.required' ? 400 : 422, message: error.message };
  return false;
};

const verifyIfOrderExists = async (id: string) => {
  const order = await ordersModels.getOrderById(id);
  console.log(order);
  if (!order) return { code: 404, message: 'Order not found' };
  return false;
};

export default {
  orderValidation,
  verifyIfOrderExists,
};