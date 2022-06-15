function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  let msCurr = Date.parse(currentDate);
  let msExp = Date.parse(expirationDate);
  return enteredCode === correctCode && msCurr < msExp;
}

console.log(checkCoupon("123a", "123", "September 5, 2014", "October 1, 2014"));
