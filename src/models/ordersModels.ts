import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { OrderIds, Product } from '../interfaces/ordersInterfaces';

const updateProducts = async (orderId: number, products: []) => {
  const query = 'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?';
  products.map(async (product: number) => {
    await connection.execute(query, [orderId, product]);
  });
};

const createOrder = async (userId: number, products: []) => {
  const query = 'INSERT INTO Trybesmith.Orders (userId) VALUES (?)';
  const [{ insertId }] = await connection.execute<ResultSetHeader>(query, [userId]);
  await updateProducts(insertId, products);
  return {
    userId,
    products,
  };
};

const getOrderById = async (orderId: string) => {
  const orderQuery = 'SELECT * FROM Trybesmith.Orders WHERE id = ?';
  const productsQuery = 'SELECT id FROM Trybesmith.Products WHERE orderId = ?';
  const [rows] = await connection.execute(orderQuery, [orderId]);
  const orders = rows as OrderIds[];
  if (orders.length === 0) return false;
  const order = orders[0];
  const [products] = await connection.execute(productsQuery, [order.id]);
  const productsIds = products as Product[];
  const getProducts = productsIds.map(({ id }) => id);
  const { id, userId } = order;
  return {
    id, 
    userId,
    products: getProducts,
  };
};

const getAll = async () => {
  const query = 'SELECT * FROM Trybesmith.Orders';
  const [rows] = await connection.execute(query);
  const orders = rows as OrderIds[];
  const getOrders = orders.map(async (order) => {
    const productsQuery = 'SELECT id FROM Trybesmith.Products WHERE orderId = ?';
    const [products] = await connection.execute(productsQuery, [order.id]);
    const productsIds = products as Product[];
    const getProducts = productsIds.map(({ id }) => id);
    return {
      id: order.id,
      userId: order.userId,
      products: getProducts,
    };
  });
  return Promise.all(getOrders);
};

export default {
  createOrder,
  getOrderById,
  getAll,
};