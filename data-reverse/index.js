function dataReverse(data) {
  let temp = [];
  let arr = [];
  while (data[0] !== undefined) {
    for (let i = 0; i < 8; i++) {
      temp.push(data.pop());
    }
    for (let i = 0; i < 8; i++) {
      arr.push(temp.pop());
    }
  }
  return arr;
}


const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

console.log(dataReverse(data));


// function dataReverse(data) {
//     let a = [];
//     while (data.length)
//       a.unshift(...data.splice(0, 8));
//     return a;
//   }