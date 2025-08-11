import chalk from 'chalk';
import { setupServer } from './server.js';
console.log(chalk.yellow('Index.js'), chalk.green('has started!'));

const task: string = 'Learn NestJS!';
console.log(chalk.bgRed.white(task));

const bootstrap = (): void => {
  setupServer();
};

bootstrap();
