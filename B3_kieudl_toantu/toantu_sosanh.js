var x = 'a' && 'b' && 'c';
var x2 = 'a' && null && 'c';
console.log(x);
console.log(x2);

var x = 'a' || 'b' || 'c';
var x2 = 'a' || null || 'c';
var x3 = 0 || null || NaN;
console.log(x);
console.log(x2);
console.log(x3);