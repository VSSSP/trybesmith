import express from 'express';
import userRouters from './routers/userRouters';

const app = express();

app.use(express.json());
app.use('/users', userRouters);

export default app;
