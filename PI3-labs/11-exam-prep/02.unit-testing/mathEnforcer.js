class MathEnforcer {
    static addFive(num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    }
    static subtractTen(num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    }
    static sum(num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
    static verifyNum(param) {
        if (typeof param !== 'number') throw new TypeError('Argument must be number ');
    }
};

module.exports = MathEnforcer;