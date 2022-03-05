function maxTriSum(numbers) {
  let arr = [];
  arr[0] = numbers[0];
  arr[1] = numbers[1];
  arr[2] = numbers[2];
  arr.sort(function (a, b) {
    return a - b;
  });
  console.log(arr);
  for (let i = 3; numbers.length > i; i++) {
    console.log(numbers[i]);
    console.log(arr);
    if (
      (numbers[i] != arr[0]) &
      (numbers[i] != arr[1]) &
      (numbers[i] != arr[2])
    ) {
      if (numbers[i] > arr[2]) {
        arr.shift();
        arr.push(numbers[i]);
      } else if (numbers[i] > arr[1]) {
        arr.shift();
        arr.splice(1, 0, numbers[i]);
      } else if (numbers[i] > arr[0]) {
        arr.splice(0, 1, numbers[i]);
      }
    }
  }
  console.log(arr);
  return arr[0] + arr[1] + arr[2];
}

console.log(
  maxTriSum([
    23, 142, -4, -8859, -3225, -4, -183, 37, 0, 5860, 8, -470, -8465, -4793, -5,
    6156, 13191, 133, -8625, 82, -27466, 34, -3286, 1365, -268, 51862, 3544,
    -33393, 1609, -34, -69551, 2, 1805, 72523, 122, 292, -28, -43346, 176, -317,
    -52094, 289, 22011, 65940, -3802, -17653, 24649, 13, -1705, 35739, 8630,
    -12, -437, -488, -7, -2594, -98, 96, 41, 6368, -273, -69326, -140, 52, 3211,
    39046, -6603, -4069, 10299, 3315, 522, 4906, 17224, 9, 28519,
  ])
);
