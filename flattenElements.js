function flattenElements(nestedArr,flatArr){
    for(let index =0; index<nestedArr.length; index++){
        if(typeof(nestedArr[index])!='number'){
            flattenElements(nestedArr[index],flatArr);
        }
        else{
            flatArr.push(nestedArr[index]);
        }
    }
    return flatArr;
}

module.exports = flattenElements;