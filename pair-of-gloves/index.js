function numberOfPairs(gloves) {
  let temp = [];
  let count = 0;
  gloves.forEach((elem) => {
    if (temp.includes(elem)) {
      temp.splice(temp.indexOf(elem), 1);
      count++;
    } else {
      temp.push(elem);
    }
  });
  return count;
}

console.log(numberOfPairs(["red", "green", "red", "blue", "blue"]));
