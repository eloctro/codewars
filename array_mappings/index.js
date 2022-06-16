const arr = [1, 2, 3];

Array.prototype.map = function (func) {
  let newArray = [];
  this.forEach((elem) => {
    newArray.push(func(elem));
  });
  return newArray;
};

console.log(arr.map((x) => x + 2));
