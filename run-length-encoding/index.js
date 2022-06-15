var runLengthEncoding = function (str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i - 1]) {
      arr[arr.length - 1][0] += 1;
    } else {
      arr.push([1, str[i]]);
    }
  }
  return arr;
};

let i = runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb");

console.log(i);
