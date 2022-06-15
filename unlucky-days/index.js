function unluckyDays(year) {
  let count = 0;
  for (let i = 0; i < 12; i++) {
    console.log(i);
    let date = new Date(year, i, 13);
    if (date.getDay() === 5) {
      count++;
    }
    console.log(date, date.getDay());
  }
  return count;
}

console.log(unluckyDays(1630));
