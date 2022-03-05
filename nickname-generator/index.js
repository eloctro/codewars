function nicknameGenerator(name) {
  let re = /[aeiou]/g;
  let res = re.exec(name[2]);
  if (name.length <= 3) {
    return "Error: Name too short";
  }
  if (res) {
    return name.slice(0, 4);
  } else {
    return name.slice(0, 3);
  }
}

console.log(nicknameGenerator("Jimmy"));
console.log(nicknameGenerator("Samantha"));
console.log(nicknameGenerator("Sam"));
console.log(nicknameGenerator("Kayne"));
console.log(nicknameGenerator("Melissa"));
console.log(nicknameGenerator("James"));
console.log(nicknameGenerator("Jean"));
