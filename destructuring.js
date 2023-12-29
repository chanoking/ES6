// const expense = {
//   type: "business",
//   amount: "$56 USD",
// };

// const { type, amount } = expense;
// console.log({ type, amount });

// const tech = ["Uber", "Google", "Netflix", "KaKao", "Ab&b", "Twitter"];

// const [length, ...rest] = tech;

// console.log(rest);

// const companies = [
//   { name: "Google", location: "Mountain View" },
//   { name: "Facebook", location: "Menlo Park" },
//   { name: "Uber", location: "San Francisco" },
// ];

// const [{ name }] = companies;

// console.log(name);

// const Google = {
//   locations: ["Mountain View", "New York", "London"],
// };

// const {
//   locations: [location],
// } = Google;

// console.log(location);

// const user = {
//   name: "chano",
//   age: 29,
//   email: "chano94@gmail.com",
//   location: "seoul",
// };

// function signup(u) {
//   const users = u;
//   console.log(users);
//   return users;
// }

// signup(user);

// const points = [
//   [4, 5],
//   [10, 1],
//   [0, 40],
// ];

// const newPoints = points.map((pair) => {
//   const [x, y] = pair;
//   return [x, y];
// });

// console.log(newPoints);

// const newPoints = points.map(([x, y]) => {
//   return { x, y };
// });

// console.log(newPoints);

// const numbers = [1, 2, 3];

// function double([number, ...rest]) {
//   // Base case: check if number is undefined
//   if (number === undefined) {
//     return [];
//   }

//   // Multiply the current number by w and concatenate with the result of recursion on the rest of the array
//   return [number * 2, ...double(rest)];
// }

// const result = double(numbers);
// console.log(result);

const numbers = [1, 2, 3];

function double([number, ...rest]) {
  if (number === undefined) return [];

  return [number * 3, ...double(rest)];
}

const result = double(numbers);

console.log(result);
