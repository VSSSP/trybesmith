import express from 'express';
import userRouters from './routers/userRouters';
import loginRouter from './routers/loginRouter';
import productRouter from './routers/productRouter';
import ordersRouter from './routers/ordersRouter';

const app = express();

app.use(express.json());
app.use('/users', userRouters);
app.use('/login', loginRouter);
app.use('/products', productRouter);
app.use('/orders', ordersRouter);

export default app;
