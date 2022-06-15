function recycle(array) {
  let output = [];
  let material = ["paper", "glass", "organic", "plastic"];
  material.map((m) => {
    let temp = [];
    array.filter((ar) => {
      if (ar.material === m || ar.secondMaterial === m) {
        temp.push(ar.type);
        return temp;
      }
    });
    output.push(temp);
  });
  return output;
}

let a = [
  { type: "rotten apples", material: "organic" },
  {
    type: "out of date yogurt",
    material: "organic",
    secondMaterial: "plastic",
  },
  { type: "wine bottle", material: "glass", secondMaterial: "paper" },
  { type: "amazon box", material: "paper" },
  { type: "beer bottle", material: "glass", secondMaterial: "paper" },
];

console.log(recycle(a));
