/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr = [2, 3, 4, 7, 11], k = 5) {
  let i,
    n = arr.length;
  for (i = 0; i < n; i++) {
    if (arr[i] - i - 1 >= k) {
      return k + i;
    }
  }
  return k + i; //亦可写成：k+n，只不过写成k+i方便理解下面一个解法
};
// 二分
var findKthPositive = function (arr = [2, 3, 4, 7, 11], k = 5) {
  let left = 0,
    right = arr.length,
    mid = 0;
  while (left < right) {
    mid = left + Math.floor((right - left) / 2);
    if (arr[mid] - mid >= k + 1) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return k + left;
};

console.log(findKthPositive());
