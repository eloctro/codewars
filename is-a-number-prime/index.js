function isPrime(num) {
  if (num < 1) {
    return false;
  }
  if (num === 2) {
    return true
  }
  for (let i = 2; i < num; i++) {
    console.log(i);
    if (num % i === 0) {
      return false;
    }
    if (num / i < i) {
      return true;
    }
  }
}

console.log(isPrime(10211));
