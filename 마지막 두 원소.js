function solution(num_list) {
  const [a, b] = [...num_list].reverse();
  // const [a, b] = num_list.reverse();
  return [...num_list, a > b ? a - b : a * 2];
}

console.log(solution([3, 5, 7]));
