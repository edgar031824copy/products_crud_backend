// src/app.ts
import express from 'express';
import cors from 'cors';
import { productsRouter } from './routes/products';
import swaggerUi from 'swagger-ui-express';
import db from './config/db';
import swaggerSpec from './config/swagger';
import morgan from 'morgan';

const app = express();

const connectDb = async () => {
  try {
    await db.authenticate();
    db.sync();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

app.use(cors());
app.use(express.json());

connectDb();

app.use(morgan('dev'));
app.use('/products', productsRouter);

//Docs
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;
