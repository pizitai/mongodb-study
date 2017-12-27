var Decimal = require('decimal.js');

// 加法
var a = 0.1
var b = 0.2
console.log('直接加法运算 a + b =', a + b)
console.log('Decimal.js加法运算 a + b =', new Decimal(a).add(new Decimal(b)).toNumber())

// 减法
var a = 1.0
var b = 0.7
console.log('直接减法运算 a - b =', a - b)
console.log('Decimal.js减法运算 a - b =', new Decimal(a).sub(new Decimal(b)).toNumber())

// 乘法
var a = 1.01
var b = 1.003
console.log('直接乘法运算 a * b =', a * b)
console.log('Decimal.js乘法运算 a * b =', new Decimal(a).mul(new Decimal(b)).toNumber())

// 除法
var a = 0.029
var b = 10
console.log('直接除法运算 a / b =', a / b)
console.log('Decimal.js除法运算 a + b =', new Decimal(a).div(new Decimal(b)).toNumber())