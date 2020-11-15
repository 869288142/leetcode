/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1 = [2, 0], m = 1, nums2 = [1], n = 1) {
  if (n == 0) return;

  let i = m - 1; //nums1索引
  let j = n - 1; //num2索引
  let k = m + n - 1; //最终生成的nums1索引
  while (i >= 0 && j >= 0) {
    if (nums2[j] >= nums1[i]) {
      nums1[k--] = nums2[j--];
    } else nums1[k--] = nums1[i--];
  }
  //程序运行到这里说明一定有一个数组遍历完毕
  if (i >= 0) {
    //nums2遍历完毕
    while (i >= 0) nums1[k--] = nums1[i--];
  }
  if (j >= 0) {
    //nums1遍历完毕
    while (j >= 0) nums1[k--] = nums2[j--];
  }
};

console.log(merge());
