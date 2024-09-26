/**
 * @file @/index.ts
 * @description Express entrypoint for the application
 * @
 */
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
  res.json('Hello world');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
