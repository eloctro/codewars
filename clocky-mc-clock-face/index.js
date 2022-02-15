var whatTimeIsIt = function (angle) {
  let h1 = Math.floor((angle * 2) / 60 / 10);
  let h2 = Math.floor(((angle * 2) / 60) % 10);
  let m1 = Math.floor(((angle * 2) % 60) / 10);
  let m2 = Math.floor(((angle * 2) % 60) % 10);
  if ((h1 === 0) & (h2 === 0)) {
    h1 = 1;
    h2 = 2;
  }
  return `${h1}${h2}:${m1}${m2}`;
};

console.log(whatTimeIsIt(27.295172808785656023));
