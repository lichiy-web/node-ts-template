import express from 'express';
import { ENV } from './constants/index.js';
import chalk from 'chalk';
const { PORT } = ENV;

export const setupServer = (): void => {
  const app = express();
  app.listen(PORT, (): void => {
    console.log(
      chalk.green('Server is started on host:'),
      chalk.blue.underline(`localhost:${PORT}`),
    );
  });
};
