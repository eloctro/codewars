function calculate(...args1) {
  function inside(...args2) {
    return (
      args2.reduce((sum, accum) => sum + accum, 0) +
      args1.reduce((sum, accum) => sum + accum, 0)
    );
  }
  return inside;
}

let sum = calculate(1, 5)(1);

console.log(sum);
