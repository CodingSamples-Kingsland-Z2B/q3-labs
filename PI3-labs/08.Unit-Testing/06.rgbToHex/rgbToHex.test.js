const { expect, should, assert } = require('chai');
const rgbToHexColor = require('./rgbToHex');
should();


describe('Testing rgbToHex Function', function() {


    it('should Take 3 integer numbers, each within range [0-255]', () => {

        assert.isString(rgbToHexColor(155, 40, 200));
        expect(rgbToHexColor(0, 0, 0)).to.be.a('string');
    })

    it('Return undefined if any of the inputs paramter are invalid type or range', () => {

        assert.equal(rgbToHexColor(-1, -2, -3), undefined);
        assert.equal(rgbToHexColor(300, 400, 400), undefined);
        assert.equal(rgbToHexColor("1", "2", "3"), undefined);
    });

    it('Return the same color in hexadecimal format as a string', () => {
        assert.equal(rgbToHexColor(37, 95, 59), "#255F3B");
        assert.equal(rgbToHexColor(255, 255, 255), "#FFFFFF");

    })

})