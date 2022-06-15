function head(arr) {
  return arr[0];
}
function tail(arr) {
  return arr.slice(1);
}

function init(arr) {
  return arr.slice(0, -1);
}

function last(arr) {
  return arr[arr.length - 1];
}

console.log(head([7, 41, 12, 6, 48]));
console.log(tail([7, 41, 12, 6, 48]));
console.log(init([7, 41, 12, 6, 48]));
console.log(last([7, 41, 12, 6, 48]));
