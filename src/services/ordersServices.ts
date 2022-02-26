import ordersModels from '../models/ordersModels';
import { Order } from '../interfaces/ordersInterfaces';

const createOrder = async (userId: number, products: []): Promise<Order> => {
  const order = await ordersModels.createOrder(userId, products);
  return order;
};

const getOrderById = async (orderId: string) => {
  const orders = await ordersModels.getOrderById(orderId);
  return orders;
};

const getAll = async () => {
  const orders = await ordersModels.getAll();
  return orders;
};

export default {
  createOrder,
  getOrderById,
  getAll,
};