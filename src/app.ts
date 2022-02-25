import express from 'express';
import userRouters from './routers/userRouters';
import loginRouter from './routers/loginRouter';
import productRouter from './routers/productRouter';

const app = express();

app.use(express.json());
app.use('/users', userRouters);
app.use('/login', loginRouter);
app.use('/products', productRouter);

export default app;
