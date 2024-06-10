import { allocate, connect, deallocate, disconnect, isSupported } from '../../src/module';

describe('module', () => {
    describe('allocate()', () => {
        it('should be a function', () => {
            expect(allocate).to.be.a('function');
        });

        if (typeof window !== 'undefined') {
            it('should allocate an ArrayBuffer', () => {
                return allocate(1024).then((arrayBuffer) => {
                    expect(arrayBuffer.byteLength).to.equal(1024);
                });
            });
        }
    });

    describe('connect()', () => {
        it('should be a function', () => {
            expect(connect).to.be.a('function');
        });

        if (typeof window !== 'undefined') {
            it('should connect a port', () => {
                return connect().then((port) => {
                    expect(port).to.be.an.instanceOf(MessagePort);
                });
            });
        }
    });

    describe('deallocate()', () => {
        it('should be a function', () => {
            expect(deallocate).to.be.a('function');
        });

        if (typeof window !== 'undefined') {
            describe('when running in a browser', () => {
                let arrayBuffer;

                beforeEach(() => {
                    arrayBuffer = new ArrayBuffer(2048);
                });

                it('should deallocate an ArrayBuffer', () => {
                    return deallocate(arrayBuffer);
                });
            });
        }
    });

    describe('disconnect()', () => {
        it('should be a function', () => {
            expect(disconnect).to.be.a('function');
        });

        if (typeof window !== 'undefined') {
            describe('when running in a browser', () => {
                let port;

                beforeEach(() => connect().then((prt) => (port = prt)));

                it('should disconnect a port', () => {
                    return disconnect(port);
                });
            });
        }
    });

    describe('isSupported()', () => {
        it('should be a function', () => {
            expect(isSupported).to.be.a('function');
        });

        if (typeof window !== 'undefined') {
            it('should check the browser support', () => {
                return isSupported();
            });
        }
    });
});
