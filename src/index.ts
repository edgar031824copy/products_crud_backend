// src/index.ts
import app from './app';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 8000;

const server = app.listen(PORT, () => {
  console.log(`running on port: ${PORT}`);
});

export default server;
