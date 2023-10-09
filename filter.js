function filter(array, cb) {
    let newArr = [];
    for(let index =0; index<array.length; index++){
        if(cb(array[index],index)){
            newArr.push(array[index]);
        }
    }
return newArr;
};

module.exports = filter;