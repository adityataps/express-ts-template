/**
 * @file @/index.ts
 * @description Express entrypoint for the application.
 */
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import errorHandlerMiddleware from '@/middlewares/errorHandling';
import indexRouter from '@/routes/index/routes';
import { getEnvironmentVariable } from '@/utils/env';

const EXPRESS_API_PORT = parseInt(getEnvironmentVariable('EXPRESS_API_PORT', '3000'));
const EXPRESS_API_HOST = getEnvironmentVariable('EXPRESS_API_HOST', '0.0.0.0');

const app = express();
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/', indexRouter);

app.use(errorHandlerMiddleware);

app.listen(EXPRESS_API_PORT, EXPRESS_API_HOST, () => {
  console.log(`Server is running on port ${EXPRESS_API_PORT}`);
});
