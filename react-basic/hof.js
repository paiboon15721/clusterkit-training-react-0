// function add(firstValue) {
//   return function(value) {
//     return firstValue + value;
//   };
// }
const add = fv => v => fv + v;

const addFive = add(5);

const result = addFive(3);
console.log(result);
