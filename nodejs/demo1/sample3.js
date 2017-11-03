var calc = require('./sample3-module');

var result = calc.add(10,30);
console.log( '덧셈결과',result);
console.log(calc.area(3));
console.log(calc.PI);

var calc2 = require('./sample3-module2');
var result2 = calc2.multiple(16,2);
var result3 = calc2.divide(16,2);
console.log(result2);
console.log(result3);