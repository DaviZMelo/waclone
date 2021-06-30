import 'reflect-metadata';
import '@shared/container';
import path from 'path';

import cors from 'cors';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';

import { createServer } from 'http';
import AppError from '@shared/errors/AppError';
import swaggerUI from 'swagger-ui-express';

import apiSchema from '@docs/index';
import configs from '@docs/config';
import routes from './routes';

const app = express();
const server = createServer(app);

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(
  '/assets',
  express.static(path.resolve(`${__dirname}/../../../docs/assets`)),
);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(apiSchema, configs));

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

export default server;
