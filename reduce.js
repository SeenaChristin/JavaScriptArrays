function reduce(array, cb, initialValue) {
    let ans = initialValue ?? 0;
    for(let index =0; index<array.length; index++){
       ans =  cb(ans,array[index]);
    }
    return ans;
};

module.exports = reduce;