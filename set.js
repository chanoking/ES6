const solution = (a, b, c) => {
  const set = new Set([a, b, c]);
  switch ([...set].length) {
    case 1:
      return calculate([a, b, c], 3);
    case 2:
      return calculate([a, b, c], 2);
    case 3:
      return calculate([a, b, c]);
  }
};

const calculate = (inc, n = 1) => {
  const [a, b, c] = inc;
  let result = 1;
  for (let i = 0; i <= n; i++) {
    result *= Math.pow(a, i) + Math.pow(b, i) + Math.pow(c, i);
  }
  return result;
};

console.log(solution(2, 6, 1));
console.log(solution(5, 3, 3));
console.log(solution(4, 4, 4));

const solution2 = (a, b, c) => {
  const set = new Set([a, b, c]);
  return [...set].length;
};

console.log(solution2(4, 4, 4));
