const solution = (arr, queries) => {
  return queries.forEach(([s, e, k]) => arr.slice(s, e + 1));
};

console.log(
  solution(
    [0, 1, 2, 4, 3],
    [
      [0, 4, 1],
      [0, 3, 2],
      [0, 3, 3],
    ]
  )
);
