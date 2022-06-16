let santa = {
  sayHoHoHo: function () {
    console.log("Ho Ho Ho!");
  },
  distributeGifts: function () {
    console.log("Gifts for all!");
  },
  goDownTheChimney: function () {
    console.log("*whoosh*");
  },
};

let notSanta = {
  sayHoHoHo: function () {
    console.log("Oink Oink!");
  },
};

function isSantaClausable(obj) {
  if (
    (typeof obj.sayHoHoHo === "function") &
    (typeof obj.distributeGifts === "function") &
    (typeof obj.goDownTheChimney === "function")
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(isSantaClausable(santa));
console.log(isSantaClausable(notSanta));
