import { ResultSetHeader } from 'mysql2';
import { InputUser, User } from '../interfaces/usersInterfaces';
import connection from './connection';

const getAll = async (): Promise<User[]> => {
  const [rows] = await connection.execute('SELECT * FROM Users');
  const users = rows as User[];
  return users;
};

const createUser = async (user: InputUser): Promise<User> => {
  const { username, classe, level, password } = user;
  const query = `INSERT INTO Trybesmith.Users (username, classe, level, password)
  VALUES (?, ?, ?, ?)`;
  const [{ insertId }] = await connection
    .execute<ResultSetHeader>(query, [username, classe, level, password]);
  const newUser = { id: insertId, username, classe, level, password };
  return newUser;
};

export default {
  getAll,
  createUser,
};