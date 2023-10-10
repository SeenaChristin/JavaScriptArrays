const flattenElements = require('../flattenElements');
const nestedArray = [1, [2], [[3]], [[['4']]]];
const flatArr =[];

flattenElements(nestedArray,flatArr);

console.log(flatArr);
