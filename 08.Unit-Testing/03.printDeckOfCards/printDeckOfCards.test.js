require('mocha-sinon');
const { expect, assert, should } = require('chai');
const printDeckOfCards = require('./printDeckOfCards');
should();

describe('Testing PrintDeckOfCards Function', () => {


    beforeEach(function() {
        this.sinon.stub(console, 'log');
    })


    it('should takes an array of string', () => {
        expect(printDeckOfCards({})).to.be.false;
        assert.isFalse(printDeckOfCards('test'));
    })

    it('should Print them in a sequence sperated by space', () => {

        printDeckOfCards(['AS', '10D', 'KH', '2C']);

        // expect(console.log.calledOnce).to.be.true;
        expect(console.log.calledWith('A♠ 10♦ K♥ 2♣')).to.be.true;
        assert.notEqual(console.log.calledWith('A♠10♦K♥2♣'), true);
    })

    it('should print invalid card when invalid card is passes', () => {
        printDeckOfCards(['AS', '10D', 'KH', '1Z']);

        expect(console.log.calledWith('Invalid Card: 1Z'));

    })
})