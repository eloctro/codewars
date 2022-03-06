function sentence(List) {
  let str = "";
  List.sort((a, b) => {
    for (keya in a) {
    }
    for (keyb in b) {
    }
    return keya - keyb;
  });
  for (let map of List) {
    for (key in map) {
      str += map[key];
    }
    if (List.indexOf(map) !== List.length) {
      str += " ";
    }
    console.log(List.indexOf(map));
    console.log();
  }
  return str;
}

let List = [
  { 4: "dog" },
  { 2: "took" },
  { 3: "his" },
  { "-2": "Vatsan" },
  { 5: "for" },
  { 6: "a" },
  { 12: "spin" },
];

console.log(sentence(List));
