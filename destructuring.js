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

const Google = {
  locations: ["Mountain View", "New York", "London"],
};

const {
  locations: [location],
} = Google;

console.log(location);
