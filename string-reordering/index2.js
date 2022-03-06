function sentence(List) {
  return List.sort((a, b) => Object.keys(a)[0] - Object.keys(b)[0])
    .map((item) => Object.values(item)[0])
    .join(" ");
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
