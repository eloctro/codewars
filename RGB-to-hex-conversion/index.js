function rgb(r, g, b) {
  let arr = [];
  arr.push(r);
  arr.push(g);
  arr.push(b);
  arr.forEach((el, ind, arr) => {
    if (el > 255) {
      arr[ind] = 255;
    } else if (el < 0) {
      arr[ind] = 0;
    }
  });
  arr = arr.map((el) => el.toString(16));
  arr = arr.map((el) => el.toUpperCase())
  arr.forEach((el, ind, arr) => {
    if (el.length < 2) {
      arr[ind] = '0' + el;
    }
  });
  return   arr.join('')
}

console.log(rgb(0, 0, 0));
console.log(rgb(0, 0, -20));
console.log(rgb(300, 255, 255));
console.log(rgb(173, 255, 47));
console.log(rgb(148, 0, 211));
