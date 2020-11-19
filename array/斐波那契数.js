/**
 * @param {number} N
 * @return {number}
 */
// 迭代法
var fib = function (N) {
  let fn = [0, 1];
  for (let i = 1; i < N; i++) {
    fn[i + 1] = fn[i] + fn[i - 1];
  }
  return fn[N];
};
// 中间迭代法
var fib = function (N) {
  if (N <= 1) {
    return N;
  }
  if (N == 2) {
    return 1;
  }

  let current = 0;
  let prev1 = 1;
  let prev2 = 1;

  for (let i = 3; i <= N; i++) {
    current = prev1 + prev2;
    prev2 = prev1;
    prev1 = current;
  }
  return current;
};
