function getCard() {
  let bingo = [];
  let arrTemp = [];
  const bingoArr = ["B", "I", "N", "G", "O"];
  const minRand = 1;
  const maxRand = 15;
  const len = 5;

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function checkIncludes(arr, num) {
    return arr.includes(num);
  }

  function checkLength(arr, len) {
    if (arr.length < len) {
      return true;
    } else {
      return false;
    }
  }

  function getSort(arr) {
    return arr.sort(function (a, b) {
      return b - a;
    });
  }

  function getStrInt(arr, str, j) {
    for (let i = 0; i < arr.length; i++) {
      bingo.push(`${str}${arr[i] + 15 * j}`);
    }
  }

  for (let j = 0; j < bingoArr.length; j++) {
    while (checkLength(arrTemp, len)) {
      let random = getRandomInt(minRand, maxRand + 1);
      if (!checkIncludes(arrTemp, random)) {
        arrTemp.push(random);
      }
    }
    getSort(arrTemp);
    if (bingoArr[j] === "N") {
      arrTemp.pop();
    }
    getStrInt(arrTemp, bingoArr[j], j);
    arrTemp = [];
  }
  return bingo;
}

console.log(getCard());
