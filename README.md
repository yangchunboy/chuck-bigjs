# chuck-bigjs
解决了js计算丢失精度的问题，稍微修改了big.js实现了连加，连减，连乘，连除。其他的请参考文档[big.js](http://mikemcl.github.io/big.js/#plus)

#安装
npm的安装方式

    npm install chuck-bigjs

#使用方法

    import Big from 'chuck-bigjs';

    const number = 2;
    const num = new Big(number);

    const plusResult = num.plus(2, 3, 4, 5); // 连加
    const minusResult = num.minus(2, 3, 4, 5); // 连减
    const divResult = num.div(2, 3, 4, 5); // 连除
    const timesResult = num.times(2, 3, 4, 5); // 连乘


