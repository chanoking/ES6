const products = [
  {
    name: "cucumber",
    type: "vegetable",
  },
  { name: "banana", type: "fruit" },
  { name: "celery", type: "vegetable" },
  { name: "orange", type: "fruit" },
];

const fruit = products.filter((e) => e.type === "fruit");
console.log(fruit);
