function vowelOne(s) {
  let str = "";
  let re = /[aeiou]/gi;
  for (let i = 0; s.length > i; i++) {
    if (s[i].match(re)) {
      str += "1";
    } else {
      str += "0";
    }
  }
  return str;
}

console.log(vowelOne("vowelOne"));
console.log(vowelOne("123, arou"));
