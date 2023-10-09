const map = require('../map');
const items = [1, 2, 3, 4, 5, 5];

let squares = map(items,(item)=>{
   return(item*item);
});
console.log(squares);