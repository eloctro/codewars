class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getName() {
    return this.firstName + " " + this.lastName;
  }
}

let augustusCole = new Person("Augustus", "Cole");

Object.defineProperty(Person.prototype, "name", {
  get() {
    return this.firstName + " " + this.lastName;
  },

  set(name) {
    [this.firstName, this.lastName] = name.split(" ");
  },
});

augustusCole.name = "Cole Train";
console.log(augustusCole.firstName); // => 'Cole'
console.log(augustusCole.lastName); // => 'Train'
console.log(augustusCole.getName()); // => 'Cole Train'
console.log(augustusCole.name); // => 'Cole Train'
