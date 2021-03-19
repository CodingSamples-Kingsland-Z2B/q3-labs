const { expect, should, assert } = require('chai');
should();
const createCalculator = require('./addSum');



describe('Test createCalculator Function', () => {

    it('Return an object , containing the functions add(), subtract() and get()', () => {


        expect(createCalculator()).to.be.an('object');
        expect(createCalculator()).to.have.property('add')
        expect(createCalculator()).to.have.a.property('subtract');
        expect(createCalculator()).to.have.own.property('get');
        expect(createCalculator()).to.have.all.keys('add', 'subtract', 'get');
    })

    it('Keep am internal sum which canot be modified from outside', () => {

        let obj = createCalculator();
        obj.value = 5;
        expect(obj.get()).to.equal(0);
    });


    it('The function add and sub should takes parameter that can be parsed as number', () => {
        let { add, subtract, get } = createCalculator();
        add(1);
        expect(get()).to.equal(1);
        add('1');
        assert.equal(get(), 2);
        subtract(1);
        expect(get(), 1)
    })

    it('function get returns the value of internal sum', () => {
        let obj = createCalculator();
        obj.add(5);
        obj.add(10);
        expect(obj.get()).to.equal(15);
    })




})