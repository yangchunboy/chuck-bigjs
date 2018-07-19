'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _big = require('big.js');

var _big2 = _interopRequireDefault(_big);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Big = function (_OldBig) {
    _inherits(Big, _OldBig);

    function Big(number) {
        _classCallCheck(this, Big);

        var _this = _possibleConstructorReturn(this, (Big.__proto__ || Object.getPrototypeOf(Big)).call(this, number));

        _this.number = number;
        return _this;
    }
    // 支持累加


    _createClass(Big, [{
        key: 'plus',
        value: function plus() {
            var addend = new _big2.default(this.number);
            for (var i = 0; i < arguments.length; i++) {
                addend = addend.plus(arguments[i]);
            }
            return addend;
        }
        // 支持累减

    }, {
        key: 'minus',
        value: function minus() {
            var subtrahend = new _big2.default(this.number);
            for (var i = 0; i < arguments.length; i++) {
                subtrahend = subtrahend.minus(arguments[i]);
            }
            return subtrahend;
        }
        // 支持累除

    }, {
        key: 'div',
        value: function div() {
            var divisor = new _big2.default(this.number);
            for (var i = 0; i < arguments.length; i++) {
                divisor = divisor.div(arguments[i]);
            }
            return divisor;
        }
        // 支持累乘

    }, {
        key: 'times',
        value: function times() {
            var multiplier = new _big2.default(this.number);
            for (var i = 0; i < arguments.length; i++) {
                multiplier = multiplier.times(arguments[i]);
            }
            return multiplier;
        }
    }]);

    return Big;
}(_big2.default);

exports.default = Big;