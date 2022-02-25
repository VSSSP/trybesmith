import { User } from '../interfaces/usersInterfaces';
import connection from './connection';

const getAll = async (): Promise<User[]> => {
  const [rows] = await connection.execute('SELECT * FROM Users');
  const users = rows as User[];
  return users;
};

export default {
  getAll,
};