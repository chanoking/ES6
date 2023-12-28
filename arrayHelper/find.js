// const users = [{ name: "Son" }, { name: "Bong" }, { name: "Hong" }];

// let user;

// user = users.find((user) => user.name === "Son");

// console.log(user);

function Car(model) {
  this.model = model;
}

const cars = [new Car("Buick"), new Car("Sonata"), new Car("Mini")];

const car = cars.find((car) => (car.model = "Sonata"));
console.log(car);
