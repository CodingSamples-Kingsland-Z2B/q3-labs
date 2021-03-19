const { expect, assert, should } = require('chai');
const subSum = require('./subSum');
should();


describe('Test subSum Function', () => {

    it('Should retuen NaN if the first element is not an array', () => {
        assert.equal(isNaN(subSum([10, 20, 30, 40, 50], 3, 300)), isNaN(1))
        assert.equal(isNaN(subSum([10, 20, 30, 40, 50], 3, 300)), false);

        expect(isNaN(subSum({}, 3, 300))).to.be.true;

        isNaN(subSum({}, 3, 300)).should.be.true;

        expect(subSum('test', 2, 3)).to.be.NaN;
        assert.isNaN(subSum('test', 2, 3), 'Subsum should return a NaN if 1st arg is not array');
    });

    it('If the start index is less than zero, consider its value to be a zero', () => {
        assert.equal(subSum([1, 2, 3], -5, 2), 6);
        expect(subSum([1, 2, 3], -6, 1)).to.be.equal(3);
        subSum([1, 2, 3], -6, 1).should.be.equal(3);
    })

    it('If the end index is outside the bounds of the array, assume it points to the last index of the array', () => {

        expect(subSum([1, 2, 3], 1, 1000)).to.equal(5);
        assert.equal(subSum([1, 2, 3], 0, 1000), 6)
    })


    it('it should return ~ 3.3', () => {
        expect(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1)).to.be.closeTo(3.3, 0.00001);
        expect(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1).toFixed(1)).to.be.equal('3.3');
    })
})