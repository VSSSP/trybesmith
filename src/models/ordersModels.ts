import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { Orders } from '../interfaces/ordersInterfaces';

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
  const query = `SELECT o.id, o.userId, p.id AS products FROM Trybesmith.Orders AS o
  INNER JOIN Trybesmith.Products AS p on p.orderId = o.id WHERE o.id = ?`;
  const [rows] = await connection.execute(query, [orderId]);
  const order = rows as Orders[];
  return order;
};

const getAll = async () => {
  const query = `SELECT o.id, o.userId, p.id AS products FROM Trybesmith.Orders AS o
  INNER JOIN Trybesmith.Products AS p ON o.id = p.orderId`;
  const [rows] = await connection.execute(query);
  const orders = rows as Orders[];  
  return orders;
};

export default {
  createOrder,
  getOrderById,
  getAll,
};