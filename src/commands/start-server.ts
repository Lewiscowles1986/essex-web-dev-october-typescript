import { CommandModule } from 'yargs';

import server from '../api/server';

const COMMAND_ALIASES = ['$0', 'serve'];
const COMMAND_HELP_STR = 'Start web server';
const handler = async () => {
    const port = 5000;
    const address = '127.0.0.1';
    const backlog = 1024;
    try {
        server.listen(port, address, backlog, () => {
            console.log(`Server started on http://${address}:${port}`);
        });
    } catch(e) {
        console.error('Unable to start server');
        process.exit(-2);
    }
};

export default {
    command: COMMAND_ALIASES,
    describe: COMMAND_HELP_STR,
    handler
};
