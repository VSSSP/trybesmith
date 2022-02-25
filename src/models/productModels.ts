import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { InputProduct, Product } from '../interfaces/productsInterfaces';

const createProduct = async (product: InputProduct): Promise<Product> => {
  const { name, amount } = product;
  const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
  const [{ insertId }] = await connection.execute<ResultSetHeader>(query, [name, amount]);
  const newProduct = { id: insertId, name, amount };
  return newProduct;
};

const getAll = async (): Promise<Product[]> => {
  const [rows] = await connection.execute('SELECT * FROM Trybesmith.Products');
  const products = rows as Product[];
  return products;
};

export default {
  createProduct,
  getAll,
};