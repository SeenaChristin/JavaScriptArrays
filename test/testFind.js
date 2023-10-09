const find = require('../find');
const items = [1, 2, 3, 4, 5, 5];

let result = find(items,(item)=>{
   return(item>4);
});
console.log(result);