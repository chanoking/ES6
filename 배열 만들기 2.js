// const solution = (l, r) => {
//   const result = [];
//   const answer = [];
//   for (let i = l; i <= r; i++) {
//     result.push(i);
//   }
//   result.forEach((e) => answer.push(e.toString()));

//   const ans1 = answer.filter((E) => !E.includes(1));
//   const ans2 = ans1.filter((E) => !E.includes(2));
//   const ans3 = ans2.filter((E) => !E.includes(3));
//   const ans4 = ans3.filter((E) => !E.includes(4));
//   const ans6 = ans4.filter((E) => !E.includes(6));
//   const ans7 = ans6.filter((E) => !E.includes(7));
//   const ans8 = ans7.filter((E) => !E.includes(8));
//   const ans9 = ans8.filter((E) => !E.includes(9));
//   const last = [];
//   ans9.forEach((e) => last.push(Number(e)));
//   return ans9.length < 1 ? [-1] : last;
// };

// function solution(l, r) {
//   const result = Array.from({ length: r - l + 1 }, (_, i) => i + l).filter(
//     (n) => !/[^05]/.test(n)
//   );
//   return result.length ? result : [-1];
// }

const solution = (l, r) => {
  const result = Array.from({ length: r - 1 + 1 }, (_, i) => i + l).filter(
    (n) => !/[^05]/.test(n)
  );
  return result;
};
console.log(solution(5, 555));
console.log(solution(10, 20));
// console.log([].length);
// const set = new Set(["foo", "bar", "baz", "foo"]);
// console.log(set);
