Array.prototype.square = function () {
  let newArray = [];
  this.forEach((elem) => {
    newArray.push(Math.pow(elem, 2));
  });
  return newArray;
};

Array.prototype.cube = function () {
  let newArray = [];
  this.forEach((elem) => {
    newArray.push(Math.pow(elem, 3));
  });
  return newArray;
};

Array.prototype.average = function () {
  let sum = 0;
  if (this === []) {
    return NaN;
  } else {
    this.forEach((elem) => {
      sum += elem;
    });
  }
  return sum / this.length;
};

Array.prototype.sum = function () {
  let sum = 0;
  this.forEach((elem) => {
    sum += elem;
  });
  return sum;
};

Array.prototype.even = function () {
  let newArray = [];
  this.forEach((elem) => {
    if (elem % 2 === 0) {
      newArray.push(elem)
    }
  });
  return newArray;
};

Array.prototype.odd = function () {
  let newArray = [];
  this.forEach((elem) => {
    if (elem % 2 === 1) {
      newArray.push(elem);
    }
  });
  return newArray;
};

let numbers = [1, 2, 3, 4, 5];

console.log(numbers.square()); // must return [1, 4, 9, 16, 25]
console.log(numbers.cube()); // must return [1, 8, 27, 64, 125]
console.log(numbers.average()); // must return 3
console.log(numbers.sum()); // must return 15
console.log(numbers.even());    // must return [2, 4]
console.log(numbers.odd());     // must return [1, 3, 5]
