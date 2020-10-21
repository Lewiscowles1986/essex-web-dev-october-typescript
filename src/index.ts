import yargs from 'yargs';
import startServer from './commands/start-server';

export const app = yargs
  .command(startServer)
  .demandCommand()
  .help()
  .argv;
