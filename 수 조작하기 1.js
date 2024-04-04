// function solution(n, control) {
//   let result;
//   for (let i = 0; i < control.length; i++) {
//     if (control[i] === "w") n++;
//     console.log(n);
//     if (control[i] === "s") n--;
//     if (control[i] === "d") n += 10;
//     if (control[i] === "n") n -= 10;
//     result += n;
//   }
//   return result;
// }

const operations = {
  w: (n) => n + 1,
  s: (n) => n - 1,
  d: (n) => (n += 10),
  a: (n) => (n -= 10),
  // d: (n) => n + 10,
  // a: (n) => n - 10,
  // w: (n) => n++,
  // s: (n) => n--,
  // d: (n) => (n += 10),
  // a: (n) => (n -= 10),
};

function solution(n, control) {
  // return [...control];
  return [...control].reduce((prev, op) => operations[op](prev), n);
}

console.log(solution(1, "wsdwsdss"));

// const abc = (a, b) => {
//   return a < b ? a++ : b++;
// };

// console.log(abc(1, 2));
