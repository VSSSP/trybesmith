import ordersModels from '../models/ordersModels';
import { Order } from '../interfaces/ordersInterfaces';

const createOrder = async (userId: number, products: []): Promise<Order> => {
  const order = await ordersModels.createOrder(userId, products);
  return order;
};

export default {
  createOrder,
};