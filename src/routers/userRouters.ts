import { Router } from 'express';
import userControllers from '../controllers/userControllers';

const router = Router();

router.get('/', userControllers.getAll);

export default router;