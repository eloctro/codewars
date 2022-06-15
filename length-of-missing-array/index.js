function getLengthOfMissingArray(arrayOfArrays) {
  if (arrayOfArrays == null) {
    return 0;
  }
  for (let i = 0; i < arrayOfArrays.length; i++) {
    if (arrayOfArrays[i] == null || arrayOfArrays[i].length == 0) {
      return 0;
    }
  }

  let num = 0;
  arrayOfArrays
    .sort((a, b) => a.length - b.length)
    .map((arr) => arr.length)
    .reduce((prev, current) => {
      if (current - prev == 2) {
        num = current - 1;
      }
      prev = current;
      return prev;
    }, 0);
  return num;
}

let r = getLengthOfMissingArray([[], [2, 4], [0, 2, 1], [2, 1, 3, 2]]);
console.log(r);
