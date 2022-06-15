class Shark extends Animal {
  constructor(name, age, legs, species, status) {
    super(name, age, status);
    this.legs = 0;
    this.species = "shark";
    this.status = status;
  }

  introduce() {
    super.introduce();
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, status);
    this.species = 4;
  }

  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, status);
    this.species = 4;
    this.master = master;
  }

  introduce() {
    super.introduce();
  }

  greetMaster() {
    return `Hello ${this.master}`;
  }
}
