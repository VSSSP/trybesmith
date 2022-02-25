import { Router } from 'express';
import productControllers from '../controllers/productsControllers';
import productMiddlewares from '../middlewares/productMiddlewares';

const router = Router();

router.post(
  '/',
  productMiddlewares.validateToken,
  productMiddlewares.validateProduct,
  productControllers.createProduct,
);

router.get('/', productMiddlewares.validateToken, productControllers.getAll);

export default router;
