function solution(arr, queries) {
  const answer = [];
  queries.forEach(([a, b, c]) => {
    answer.push(b);
  });
  return answer;
}

console.log(
  solution(
    [0, 1, 2, 4, 3],
    [
      [0, 4, 2],
      [0, 3, 2],
      [0, 2, 2],
    ]
  )
);
