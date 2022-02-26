import { ResultSetHeader } from 'mysql2';
import { Orders } from '../interfaces/ordersInterfaces';
import connection from './connection';

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

// const getOrder = async (orderId: string) => {
//   const query = 'SELECT * FROM Trybesmith.Orders WHERE id = ?';
//   const [rows] = await connection.execute(query, [orderId]);
//   console.log(rows);
  
//   return rows;
// };.

export interface Order {
  id: number;
  userId: number;
}

export interface Product {
  id: number;
}

const getOrderById = async (orderId: string) => {
  const orderQuery = 'SELECT * FROM Trybesmith.Orders WHERE id = ?';
  const productsQuery = 'SELECT id FROM Trybesmith.Products WHERE orderId = ?';
  const [rows] = await connection.execute(orderQuery, [orderId]);
  const orders = rows as Order[];
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

export default {
  createOrder,
  getOrderById,
};