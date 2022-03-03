const objA = { a: 10, b: 20, c: 30 };
const objB = { a: 3, c: 6, d: 3 };
const objC = { a: 5, d: 11, e: 8 };
const objD = { c: 3 };



function combine(...args) {
  let obj = {};
  for (let elem of args) {
    for (key in elem) {
      if (!(key in obj)) {
        obj[key] = elem[key]
      } else if (key in obj) {
        obj[key] += elem[key]
      };
    }
  }
  console.log(obj);
  // return obj;
}



combine(objA, objD);