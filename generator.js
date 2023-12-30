// function* numbers() {}

// console.log(numbers());

function* shopping() {
  // stuff on the sidewalk

  // walking down the sidewalk

  // go into the store with cash
  const stuffFromStore = yield "cash";

  const cleanedClothes = yield "laundry";

  // Walking back home
  return [stuffFromStore, cleanedClothes];
}

// stuff in the store
const gen = shopping();
console.log(gen);
const next = gen.next(); //leaving the house
// walked into the store
// walking up and down the aisles..

// purchase the stuff
console.log(next);
const middle = gen.next("groceries"); // leaving the store with groceires
console.log(middle);
const finished = gen.next("laundry");
console.log(finished);

function* colors() {
  yield "blue";
  yield "red";
  yield "yellow";
}

const colours = [];
for (let color of colors()) {
  colours.push(color);
}
console.log(colours);

const testingTeam = {
  lead: "juno",
  front: "king",
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.front;
  },
};
const engineeringTeam = {
  size: 3,
  name: "engineering",
  lead: "chano",
  clouding: "son",
  devOps: "hong",
  testingTeam,
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.clouding;
    yield this.devOps;
    yield* this.testingTeam;
  },
};

const love = [];

// function* TeamEngineering(team) {
//   yield team.lead;
//   yield team.clouding;
//   yield team.devOps;
//   yield* team.testingTeam;
// }

// function* TestingTeam(team) {
//   yield team.lead;
//   yield team.front;
// }

for (let name of engineeringTeam) {
  love.push(name);
}

console.log(love);

class Comment {
  constructor(content, children) {
    this.content = content;
    this.children = children;
  }

  *[Symbol.iterator]() {
    yield this.content;
    for (let child of this.children) {
      yield* child;
    }
  }
}
const children = [
  new Comment("hi", []),
  new Comment("hello", []),
  new Comment("good", []),
];

const comments = [];
const comment = new Comment("parent", children);
for (let co of comment) {
  comments.push(co);
}
console.log(comments);
