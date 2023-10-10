function flattenElements(nestedArr,flatArr){
    for(let index =0; index<nestedArr.length; index++){
        if(Array.isArray(nestedArr[index])){
            flattenElements(nestedArr[index],flatArr);
        }
        else{
            flatArr.push(nestedArr[index]);
        }
    }
    return flatArr;
}

module.exports = flattenElements;