import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import routes from './routes';
import errorHandler from './middlewares/errorHandler';
import cookieParser from 'cookie-parser';

const app: Application = express();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use('/api', routes);
app.use(errorHandler);
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello from basic endpoint🤩' });
});

app.listen(port, () => {
  console.log(`Server is listening on PORT: ${port} 😀`);
});

export default app;
