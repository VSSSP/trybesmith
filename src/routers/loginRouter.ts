import { Router } from 'express';
import userControllers from '../controllers/userControllers';
import userMiddlewares from '../middlewares/userMiddlewares';

const router = Router();

router.post('/', userMiddlewares.validateLogin, userControllers.login);

export default router;