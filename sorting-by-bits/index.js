function sortByBit(arr) {
  function toBitLen(dec) {
    return dec.toString(2).split("0").join("").length;
  }
  arr.sort((a, b) => {
    if (toBitLen(a) > toBitLen(b)) {
      return 1;
    }
    if (toBitLen(a) == toBitLen(b)) {
      return a - b;
    }
    if (toBitLen(a) < toBitLen(b)) {
      return -1;
    }
  });
}

sortByBit([9, 4, 5, 3, 5, 7, 2, 56, 8, 2, 6, 8, 0]);
