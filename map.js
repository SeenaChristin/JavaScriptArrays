function map(array, cb) {
    let newArr = [];
    for(let index =0; index<array.length; index++){
        newArr.push(cb(array[index],index));
    }
return newArr;
};

module.exports = map;