const filter = require('../filter');
const items = [1, 2, 3, 4, 5, 5];

let result = filter(items,(item)=>{
   return(item<4);
});
console.log(result);