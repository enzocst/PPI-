let x = 0;
let y = 5;
console.log(x)
console.log(y)
x = --y;
console.log(x)
console.log(y)
y = 8;
x = y++;
console.log(x)
console.log(y)
x *= y + 4 ** 2;
console.log(x);
x = 5;
console.log(x == '5'); //true
console.log(x == '5'); //false
console.log(x === '5'); //true
console.log(x != '5'); //false

//console.log(0 < y <=60);; //incorreto
console.log(y > 0 && y <= 60);