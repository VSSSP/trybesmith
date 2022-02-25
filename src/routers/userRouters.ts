import { Router } from 'express';
import userControllers from '../controllers/userControllers';
import userMiddlewares from '../middlewares/userMiddlewares';

const router = Router();

router.get('/', userControllers.getAll);

router.post('/', userMiddlewares.validateUser, userControllers.createUser);

export default router;