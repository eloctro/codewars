function deepCount(a) {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    count++
    if (typeof a[i] === 'object') {
      count += deepCount(a[i]);
    }
  }
  return count;
}

console.log(deepCount([[[[[[[[[]]]]]]]]]));
// deepCount([1, 2, 3, [1, 2]]);