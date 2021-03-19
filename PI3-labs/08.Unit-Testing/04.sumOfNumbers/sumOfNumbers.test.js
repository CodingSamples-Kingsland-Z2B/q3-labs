const { expect, assert, should } = require('chai');
const sum = require('./sumOfNumbers');
should();


describe('Testing Sum Function', () => {
    it('should take an array of numbers as arguments', () => {
        assert.equal(sum([1, 2, 3]), 6);
        assert.isNaN(sum('test'));
        expect(sum([1, 2, 3])).to.not.NaN;
        sum('test').should.be.NaN;
    })

    it('Return the sum of the values of all elements insidet the array', () => {
        assert.equal(sum([10, 20, 30, 40, 50]), 150);
        expect(sum(["1", "2", "3"])).to.equal(6);
        assert.equal(sum([1.02, 1.3, 0.2]).toFixed(2), 2.52, "Incorrect Floadting point number");
        expect(sum([1.1, 1.1, 1.1])).to.be.closeTo(3.3, 0.000001)
        assert.isNaN(sum([1, undefined, 2]), 'you should get NaN');
    });

    it('Should return NaN', () => {
        expect(sum(['Hello', 2, 3])).to.be.NaN;
    })

})