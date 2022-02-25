import { User } from '../interfaces/usersInterfaces';
import userModels from '../models/userModels';

const getAll = async (): Promise<User[]> => {
  const users = await userModels.getAll();
  return users;
};

const createUser = async (user: User): Promise<User> => {
  const newUser = await userModels.createUser(user);
  return newUser;
};

export default {
  getAll,
  createUser,
};