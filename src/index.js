import OldBig from 'big.js';

class Big extends OldBig {
    constructor (number) {
        super(number);
        this.number = number;
    }
    /// 支持累加
    plus() {
        let addend = this.number;
        for (let i = 0; i < arguments.length; i++) {
            addend = super.plus(arguments[i]);
        }
        return addend;
    }
    // 支持累减
    minus() {
        let subtrahend = this.number;
        for (let i = 0; i < arguments.length; i++) {
            subtrahend = super.minus(arguments[i]);
        }
        return subtrahend;
    }
    // 支持累除
    div() {
        let divisor = this.number;
        for (let i = 0; i < arguments.length; i++) {
            divisor = super.div(arguments[i]);
        }
        return divisor;
    }
    // 支持累乘
    times() {
        let multiplier = this.number;
        for (let i = 0; i < arguments.length; i++) {
            multiplier = super.times(arguments[i]);
        }
        return multiplier;
    }
}

export default Big;
