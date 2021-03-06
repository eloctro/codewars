class File {
  constructor(name, contents) {
    this._fullName = name;
    this.contents = contents;
    this.count = 0;
    this.countChar = 0;
  }

  get fullName() {
    return this._fullName;
  }

  get filename() {
    let nameSplit = this._fullName.split(".");
    let nameSlice = nameSplit.slice(0, nameSplit.length - 1);
    let nameJoin = nameSlice.join(".");
    return nameJoin;
  }

  get extension() {
    let nameSplit = this._fullName.split(".");
    return nameSplit[nameSplit.length - 1];
  }

  getContents() {
    return this.contents;
  }

  write(str) {
    if (this.contents) {
      this.contents += "\n";
    }
    this.contents += str;
  }

  gets() {
    let contentsSplit = this.contents.split("\n");
    this.count++;
    return contentsSplit[this.count - 1];
  }

  getc() {
    let contentsSplit = this.contents.split("");
    this.countChar++;
    return contentsSplit[this.countChar - 1];
  }
}

let example = new File(
  "class.phptester.php",
  "<?php /* Some PHP code here */ ?>"
);

example.fullName = "dfs";
console.log(example.fullName);
example.filename = "hacked";
console.log(example.fileName);
console.log(example.extension);
console.log(example.getContents());
example.write("Hello World");
console.log(example.getContents());
example.write("This is an example file provided to you by the Kata author");
console.log(example.getContents());
console.log(example.gets());
console.log(example.gets());
console.log(example.gets());
console.log(example.gets());
console.log(example.getc());
console.log(example.getc());
console.log(example.getc());
console.log(example.getc());
console.log(example.getc());
console.log(example.getc());
console.log(example.getc());
console.log(example.getc());
console.log(example.getc());
console.log(example.getc());
console.log(example.getc());
console.log(example.getc());
console.log(example.getc());
console.log(example.getc());
console.log(example.getc());
console.log(example.getc());
console.log(example.getc());
console.log(example.getc());
console.log(example.getc());
console.log(example.getc());
console.log(example.getc());
