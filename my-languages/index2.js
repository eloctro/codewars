// Object.entries(obj).sort((a, b) => a[0] - b[0]);

function myLanguages(results) {
  return Object.entries(results)
    .sort((a, b) => b[1] - a[1])
    .filter((elem) => elem[1] >= 60)
    .map((elem) => elem[0]);
}

console.log(myLanguages({ Java: 10, Ruby: 80, Python: 65 }));
