import { User } from '../interfaces/usersInterfaces';
import { loginJoiValidation, userJoiValidation } from '../utils/userJoiValidation';
import userModels from '../models/userModels';

const userValidation = (user: User) => {
  const { error } = userJoiValidation.validate(user);
  const typeOferror = error?.details[0].type;
  if (error) return { code: typeOferror === 'any.required' ? 400 : 422, message: error.message };
  if (typeof user.level !== 'number') return { code: 422, message: 'Level must be a number' };
  return false;
};

const loginValidation = async (username: string, password: string) => {
  const { error } = loginJoiValidation.validate({ username, password });
  if (error) return { code: 400, message: error.message };
  const user = await userModels.getUser(username);
  const checkPassword = user?.password === password;
  if (!user || !checkPassword) return { code: 401, message: 'Username or password invalid' };
  return false;
};

export default {
  userValidation,
  loginValidation,
};