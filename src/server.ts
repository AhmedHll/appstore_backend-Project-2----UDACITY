import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import routes from './routes';
import errorHandler from './middlewares/errorHandler';
// import db from './database';

const app: Application = express();

const port = process.env.PORT || 2222;

const corsOption = {
  origin: 'http://someotherdomissn.com',
  optionSuccessStatus: 200,
};

app.use(cors(corsOption));
app.use(express.json());
app.use('/api', routes);
app.use(errorHandler);
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello🤩' });
});

// app.get('/test-cors', cors(corsOption), (req, res, next)=>{
//     res.json({msg: 'This is CORS-enabled with a middle ware'})
// })

// test db

app.listen(port, () => {
  console.log(`Server is listening on PORT: ${port} 😀`);
});

export default app;
