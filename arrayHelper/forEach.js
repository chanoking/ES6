const arr = ["fineapple", "apple", "banana", "mango"];
// console.log(arr);

const El = arr.forEach((e) => console.log(e));
// console.log(El);

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let sum = 0;
const newNumber = arr2.forEach(function (e) {
  sum += e;
});
console.log(sum);
