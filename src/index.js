import OldBig from 'big.js';

class Big extends OldBig {
    constructor (number) {
        super(number);
        this.number = number;
    }
    // 支持累加
    plus() {
        let addend = new OldBig(this.number);
        for (let i = 0; i < arguments.length; i++) {
            addend = addend.plus(arguments[i]);
        }
        return addend;
    }
    // 支持累减
    minus() {
        let subtrahend = new OldBig(this.number);
        for (let i = 0; i < arguments.length; i++) {
            subtrahend = subtrahend.minus(arguments[i]);
        }
        return subtrahend;
    }
    // 支持累除
    div() {
        let divisor = new OldBig(this.number);
        for (let i = 0; i < arguments.length; i++) {
            divisor = divisor.div(arguments[i]);
        }
        return divisor;
    }
    // 支持累乘
    times() {
        let multiplier = new OldBig(this.number);
        for (let i = 0; i < arguments.length; i++) {
            multiplier = multiplier.times(arguments[i]);
        }
        return multiplier;
    }
}

export default Big;
