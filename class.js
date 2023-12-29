class Car {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }
  drive() {
    return "vroooomm....";
  }
}

class Hyundai extends Car {
  constructor(model, year) {
    super(model, year);
  }
}

const sonata = new Hyundai("Sonata", 2024);
const car = new Car("Toyota", 1994);

console.log(sonata.drive());
