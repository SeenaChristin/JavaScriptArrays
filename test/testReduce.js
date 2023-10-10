const reduce = require('../reduce');
const items = [1, 2, 3, 4, 5, 5];
let initialVal = 3;

let result  = reduce(items,(sum,item)=>{
    sum = sum + item;
    return sum;
},initialVal);

console.log(result);