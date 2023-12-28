// const numbers = [10, 20, 30];

// let sum = 0;

// const number = numbers.reduce((chano, number) => chano + number, 20);
// console.log(number);

// const colors = [{ color: "red" }, { color: "blue" }, { color: "purple" }];

// console.log(
//   colors.reduce((previous, c) => {
//     previous.push(c.color);
//     return previous;
//   }, [])
// );

// console.log(
//   colors.reduce(function (previous, color) {
//     previous.push(color.color);
//     return previous;
//   }, [])
// );

const numbers = [1, 1, 2, 3, 4, 4];

function unique(array) {
  return array.reduce((initial, arr) => {
    if (!initial.find((i) => i === arr)) initial.push(arr);
    return initial;
  }, []);
}
console.log(unique(numbers));
