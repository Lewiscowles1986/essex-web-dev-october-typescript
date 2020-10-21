import yargs from 'yargs';

const mockListen = jest.fn();
jest.mock('../../api/server', () => ({
    listen: mockListen
}));

import startServer from '../start-server';

describe('hello command', () => {
    let consoleLog: any;
    let consoleError: any;
    beforeAll(() => {
        // quieten test
        consoleLog = jest.spyOn(console, 'log').mockImplementation();
        consoleError = jest.spyOn(console, 'error').mockImplementation();
    });

    afterAll(() => {
        jest.restoreAllMocks();
    });

    describe('When all is well', () => {
        mockListen.mockImplementation((port: number, address: string, backlog: number, cb) => {
            cb();
        });

        it('console logs expected message', async () => {
            const yargsCmd = yargs.command(startServer);
            await yargsCmd.parse('serve', {});
            expect(consoleLog).toBeCalledWith('Server started on http://127.0.0.1:5000');
        });

        it('starts server listening with port, address, backlog and callback', async () => {
            const yargsCmd = yargs.command(startServer);
            await yargsCmd.parse('serve', {});
            expect(mockListen).toBeCalledWith(
                expect.any(Number),
                expect.any(String),
                expect.any(Number),
                expect.any(Function)
            );
        });

        it('starts server listening with port, address, backlog and callback', async () => {
            const yargsCmd = yargs.command(startServer);
            await yargsCmd.parse('serve', {});
            expect(mockListen).toBeCalledWith(
                expect.any(Number),
                expect.any(String),
                expect.any(Number),
                expect.any(Function)
            );
        });
    });

    describe('If anything goes wrong', () => {
        const exitProcess = jest.spyOn(process, 'exit').mockImplementation(() => { return undefined as never });

        beforeEach(() => {
            mockListen.mockImplementation((port: number, address: string, backlog: number, cb) => {
                throw new Error('Oh Noes!');
            });
        });

        it('exits the process', async () => {
            const yargsCmd = yargs.command(startServer);
            await yargsCmd.parse('serve', {});
            expect(exitProcess).toBeCalled();
        });

        it('logs using console error', async () => {
            const yargsCmd = yargs.command(startServer);
            await yargsCmd.parse('serve', {});
            expect(consoleError).toBeCalledWith('Unable to start server');
        });
    })
});
