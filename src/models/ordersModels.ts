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
// };

const getOrderById = async (orderId: string) => {
  const query = `SELECT odr.id, odr.userId, pdct.id as products From Trybesmith.Orders as odr
  INNER JOIN Trybesmith.Products as pdct ON odr.id = pdct.orderId where odr.id = ?`;
  const [rows] = await connection.execute(query, [orderId]);
  const orders = rows as Orders[];
  if (orders.length === 0) return false;
  const getProducts = orders.map(({ products }) => products);
  const order = orders[0];
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