import { ResultSetHeader } from 'mysql2';
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

export default {
  createOrder,
};