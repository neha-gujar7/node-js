// console.log("hey there is JS");
// //for make it run in terminal,we write usually node filename.js
// //but here we can write node file-name only becuase node can only execute JS files
// function add(a,b){
//     return a+b;
// }
const math = require('./math');
// const math=require(./math);
// console.log(math);
// console.log("math value is:", math(2,3));
// console.log(sub(3-9));

console.log("math value is:", math.add (2,3));
console.log("math value is:", math.sub(2,3));


