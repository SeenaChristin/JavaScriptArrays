const reduce = require('../reduce');
const items = [1, 2, 3, 4, 5, 5];

let result  = reduce(items,(sum,item)=>{
    sum = sum + item;
    return sum;
});

console.log(result);