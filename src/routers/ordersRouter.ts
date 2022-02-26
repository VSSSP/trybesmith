import { Router } from 'express';
import ordersControllers from '../controllers/ordersControllers';
import orderMiddlewares from '../middlewares/orderMiddlewares';
import productMiddlewares from '../middlewares/productMiddlewares';

const router = Router();

router.post(
  '/',
  productMiddlewares.validateToken,
  orderMiddlewares.createOrder,
  ordersControllers.createOrder,
);

export default router;
