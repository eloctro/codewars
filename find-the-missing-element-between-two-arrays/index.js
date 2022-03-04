function findMissing(arr1, arr2) {
  let sum = arr1.reduce((sum, current) => sum + current, 0);
  let diff = arr2.reduce((diff, current) => diff - current, sum);
  return diff
}

console.log(findMissing([1, 2, 3], [1, 3]));
console.log(findMissing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]));
console.log(findMissing([7], []));
console.log(findMissing([4, 3, 3, 61, 8, 8], [8, 61, 8, 3, 4]));
console.log(findMissing([0, 0, 0, 0, 0], [0, 0, 0, 0]));
