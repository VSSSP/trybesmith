import { User } from '../interfaces/usersInterfaces';
import userModels from '../models/userModels';

const getAll = async (): Promise<User[]> => {
  const users = await userModels.getAll();
  return users;
};

export default {
  getAll,
};