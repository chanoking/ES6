// function unshift1(array, a, b, c, d, e) {
//   return [a, b, c, d, e].concat(array);
// }

// const newArr1 = unshift1([6, 7], 1, 2, 3, 4, 5);
// console.log(newArr1);

// function unshift(array, a, b, c, d, e) {
//   return [a, b, c, d, e, ...array];
// }
// const [a, b, c, d, e] = [1, 2, 3, 4, 5];
// const newArr = unshift([6, 7], 1, 2, 3, 4, 5);
// console.log(newArr);

function unshift(array, ...element) {
  return [...element, ...array];
}

const newArr = unshift([6, 7], 1, 2, 3, 4, 5);
console.log(newArr);
