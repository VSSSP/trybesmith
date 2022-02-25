import jwt, { SignOptions } from 'jsonwebtoken';
import { UsernameAndId } from './interfaces/usersInterfaces';

const jwtConfig: SignOptions = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const createUser = (id: number, username: string): string => {
  const token = jwt.sign({ id, username }, 'password', jwtConfig);
  return token;
};

const login = (username: string, password: string): string => {
  const token = jwt.sign({ username, password }, 'password', jwtConfig);
  return token;
};

// const userLogin = (token: string) => {
//   const user = jwt.verify(token, 'password', jwtConfig);
//   return user ? user as UsernameAndId : null;
// };

export default {
  createUser,
  login,
};