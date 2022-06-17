class Cube {
  constructor(length) {
    this.length = length;
  }

  get surfaceArea() {
    return this.length ** 2 * 6;
  }

  set surfaceArea(area) {
    return (this.length = Math.sqrt(area / 6));
  }

  get volume() {
    return this.length ** 3;
  }

  set volume(value) {
    this.length = value ** (1 / 3);
  }
}

let cube = new Cube(2);

console.log(cube.length);
console.log(cube.surfaceArea);
console.log(cube.volume);
cube.volume = 5;
console.log(cube.volume);
console.log(cube.surfaceArea);
