const strCoun = {
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime", 2, 3, 4],
  fifth: null,
  six: {
    first: "1",
    second: "2",
    third: false,
    fourth: ["anytime", 2, 3, 4],
    fifth: null,
  },
};

function strCount(obj) {
  let count = 0;

  function isObj(obj) {
    if (typeof obj == "object") {
      for (let i in obj) {
        if (typeof obj[i] == "string") {
          count++;
        } else if (typeof obj[i] == "object") {
          isObj(obj[i]);
        }
      }
    }
  }

  function isStr(str) {
    if (typeof str == "string") {
      count++;
    }
  }

  for (let key in obj) {
    isStr(obj[key]);
    isObj(obj[key]);
  }
  return count;
}

console.log(strCount(strCoun));

// function strCount(obj) {
//   let count = 0;
//   for (key in obj) {
//     if (typeof obj[key] == "string") count++;
//     if (typeof obj[key] == "object") count += strCount(obj[key]);
//   }
//   return count;
// }