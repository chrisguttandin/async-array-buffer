import { allocate, connect, deallocate, disconnect, isSupported } from '../../src/module';

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

        it('should connect a port', () => {
            return connect()
                .then((port) => {
                    expect(port).to.be.an.instanceOf(MessagePort);
                });
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

        beforeEach(() => connect()
            .then((prt) => port = prt));

        it('should disconnect a port', () => {
            return disconnect(port);
        });

    });

    describe('isSupported()', () => {

        it('should check the browser support', () => {
            return isSupported();
        });

    });

});
