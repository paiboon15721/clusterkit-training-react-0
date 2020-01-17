const animals = ["cat", "dog"];

const map = function(func, arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const result = func(arr[i]);
    newArr.push(result);
  }
  return newArr;
};

const newArr = map(function(v) {
  return `my ${v}`;
}, animals);

console.log(newArr);
