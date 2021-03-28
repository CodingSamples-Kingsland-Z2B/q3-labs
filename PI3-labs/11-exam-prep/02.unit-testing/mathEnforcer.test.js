let { verifyNum, addFive, subtractTen, sum } = require('./mathEnforcer.js');
const { expect, assert, should } = require('chai');
should();


describe('Testing MathEnforcer', function() {

    describe('The methods should function correctly for positive', function() {

        it('should return 10 when pass 5 with addFive method', function() {

            expect(addFive(5)).to.equal(10);

        });

        it('Should return 10 when pas 20 with subtract method', function() {
            subtractTen(20).should.equal(10);
        });

        it('should return 15 when pass 5 and 10 to sum method', function() {
            assert.strictEqual(sum(10, 5), 15, 'Should return 15');
        });

        it('It should throw error if passing string to verify number', function() {

            expect(() => verifyNum('text')).to.throw();
            (() => verifyNum('text')).should.throw();
            assert.throws(() => verifyNum('text'));
        });

        it('It should throw error if passing object to verify number', function() {

            try {
                expect(verifyNum({})).to.not.throw();
            } catch (err) {
                expect(err.message).to.equal('Argument must be number ')
            }
        });


    });


    describe('The methods should function correctly for negative', function() {
        it('should return -5 when pass -10 with addFive method', function() {

            expect(addFive(-10)).to.equal(-5);

        });

        it('Should return -10 when pas -20 with subtract method', function() {
            subtractTen(-20).should.equal(-30);
        });

        it('should return -15 when pass -5 and -10 to sum method', function() {
            assert.strictEqual(sum(-10, -5), -15, 'Should return 15');
        });

        it('should return undefined when pass string to addFive , subtractTen, sum methods', () => {
            expect(addFive('text')).to.be.undefined;
            assert.isUndefined(subtractTen('test'));
        })

    });


    describe('The methods should function correctly for float numbers', function() {
        it('should return 1.1 when pass 5.1 with addFive method', function() {

            // expect(addFive(1.1)).to.equal(6.1);
            expect(addFive(1.01)).to.closeTo(6, 0.01);

        });

        it('Should return 10.5 when pas 20.5 with subtract method', function() {
            // subtractTen(20.5).should.equal(10.5);
            Number(subtractTen(20.01).toFixed(2)).should.closeTo(10, 0.01);

        });

        it('should return 3.3 when pass 2.1 and 1.2 to sum method', function() {
            assert.closeTo(sum(2.001, 1), 3, 0.01);
        });

    })

})