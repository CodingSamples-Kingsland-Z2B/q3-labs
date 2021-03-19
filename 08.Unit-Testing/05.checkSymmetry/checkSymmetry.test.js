const { expect, assert, should } = require('chai');
const isSymmetric = require('./checkSymmetry');
should();


describe('Test checkSymmetric', () => {


    describe('General Tests', () => {
        it('should be a function', () => {
            expect(isSymmetric.constructor === Function).to.be.true
        })

        it('should br false if argument is not array', () => {
            expect(isSymmetric('test')).to.be.false;
            assert.isFalse(isSymmetric({}));
        })
    })


    describe('Values Test', () => {

        it('Return false for any input that is not correct type', () => {
            assert.equal(isSymmetric(123), false);
            assert.equal(isSymmetric("123"), false);
        })

        it('Return false for any input that is not symmetric and true for symmetric', () => {

            assert.isTrue(isSymmetric([1, 2, 1]));
            assert.isTrue(isSymmetric([1, 2, 2, 1]));
            assert.isTrue(isSymmetric([]));
            assert.isTrue(isSymmetric([1]));
            assert.isFalse(isSymmetric([1, 2]));
            assert.isFalse(isSymmetric([1, 2, 5, 1]));
            assert.isFalse(isSymmetric([5, 'Hi', { a: 5 }, new Date()]));
            assert.isTrue(isSymmetric([5, 'Hi', { a: 5 }, new Date(), { a: 5 }, 'Hi', 5]));


        })
    })


})