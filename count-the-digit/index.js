function nbDig(n, d) {
  let square = 0;
  let str = '';
  let len = 0;
  let count = 0;
  for (let i = 0; i <= n; i++) {
    square = i * i;
    str = square.toString();
    len = str.length;
    for (let j = 0; j < len; j++) {
      if (Number(str[j]) === d) {
        count++
      }
    }
  }
  return count;
}


console.log(nbDig(5750, 0));
console.log(nbDig(11011, 2));
console.log(nbDig(12224, 8));
console.log(nbDig(11549, 1));



