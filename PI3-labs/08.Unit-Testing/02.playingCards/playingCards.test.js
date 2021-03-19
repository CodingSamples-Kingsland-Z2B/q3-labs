const { expect, assert, should } = require('chai');
const makeCard = require('./playingCards');
should();


describe('Testing Card Factory Function', () => {


    it('should throw an error if inialized with invalid face or suit', () => {

        expect(makeCard.bind(this, '1', 'S')).to.throw('Error');

        try {
            expect(makeCard('2', 'Z')).to.not.throw();
        } catch (err) {
            expect(err.message).to.be.equal('Error');
        }

    });


    it('should throw an error if an attempt is made to change the face or suit of an existing intstance to invalid value', () => {

        let card = makeCard('2', 'S');

        try {
            expect(card.face = '1').to.not.throw();
        } catch (err) {
            expect(err.message).to.be.equal('Error');
        }

        try {
            assert.doesNotThrow(card.suit = 'z');
        } catch (err) {
            assert.equal(err.message, 'Error');
        }
    })


})