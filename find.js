function find(array, cb) {
    for(let index =0; index<array.length; index++){
        if(cb(array[index],index)){
           return array[index];
        }
    }
};

module.exports = find;