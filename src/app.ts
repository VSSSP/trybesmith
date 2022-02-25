import express from 'express';
import userRouters from './routers/userRouters';
import loginRouter from './routers/loginRouter';

const app = express();

app.use(express.json());
app.use('/users', userRouters);
app.use('/login', loginRouter);

export default app;
