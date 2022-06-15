function explode(s) {
  let str = ''
  for (digit of s.toString()) {
    str += digit.repeat(digit);
  }
  return str;
}


console.log(explode(102269));