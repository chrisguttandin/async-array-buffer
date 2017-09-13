import { allocate, connect, deallocate, disconnect } from '../../src/module';

describe('module', () => {

    describe('allocate()', () => {

        it('should allocate an ArrayBuffer', () => {
            return allocate(1024)
                .then((arrayBuffer) => {
                    expect(arrayBuffer.byteLength).to.equal(1024);
                });
        });

    });

    describe('connect()', () => {

        let port;

        beforeEach(() => {
            const messageChannel = new MessageChannel();

            port = messageChannel.port1;
        });

        it('should connect a port', () => {
            return connect(port);
        });

    });

    describe('deallocate()', () => {

        let arrayBuffer;

        beforeEach(() => {
            arrayBuffer = new ArrayBuffer(2048);
        });

        it('should deallocate an ArrayBuffer', () => {
            return deallocate(arrayBuffer);
        });

    });

    describe('disconnect()', () => {

        let port;

        beforeEach(() => {
            const messageChannel = new MessageChannel();

            port = messageChannel.port1;
        });

        it('should disconnect a port', () => {
            return disconnect(port);
        });

    });

});
