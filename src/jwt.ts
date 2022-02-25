import jwt, { SignOptions } from 'jsonwebtoken';

const jwtConfig: SignOptions = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const createUser = (id: number, username: string): string => {
  const token = jwt.sign({ id, username }, 'password', jwtConfig);
  return token;
};

export default {
  createUser,
};