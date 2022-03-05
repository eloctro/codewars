function myLanguages(results) {
  let arr = [];
  for (key in results) {
    if (results[key] >= 60) {
      arr.push(results[key]);
    }
  }
  arr.sort((a, b) => b - a);
  for (let i = 0; arr.length > i; i++) {
    for (key in results) {
      if (results[key] === arr[i]) {
        arr[i] = key;
      }
    }
  }
  return arr;
}

console.log(myLanguages({ Hindi: 60, Greek: 71, Dutch: 93 }));
