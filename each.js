function each(array, cb) {
    for (let index = 0; index < array.length; index++) {
        cb(array[index], index, array);
      }
}

module.exports = each;