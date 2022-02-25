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

export default router;
