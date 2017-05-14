import { allocate, deallocate } from '../../src/module';

describe('module', () => {

    describe('allocate()', () => {

        it('should allocate an ArrayBuffer', () => {
            return allocate(1024)
                .then((arrayBuffer) => {
                    expect(arrayBuffer.byteLength).to.equal(1024);
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

});
