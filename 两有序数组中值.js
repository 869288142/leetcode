// 给定两个有序数组，其大小分别为m n
// 规定时间log(m+n)
/**
//  * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// 思路：
// 1.归并排序
// 2.分奇偶计算中值
// 时间复杂度 O(m+n)
// var findMedianSortedArrays = function(nums1, nums2) {
//   let arr = []
//   let i = 0
//   let j = 0
//   if(nums1.length === 0) {
//     return midValue(nums2)
//   }
//   if(nums2.length === 0) {
//     return midValue(nums1)
//   }
//   while (i < nums1.length && j < nums2.length) {
//     if (nums1[i] > nums2[j]) {
//       arr.push(nums2[j++])
//     } else {
//       arr.push(nums1[i++])
//     }
//   }
//   while (i < nums1.length) {
//     arr.push(nums1[i++])
//   }
//   while (j < nums2.length) {
//     arr.push(nums2[j++])
//   }
//   return midValue(arr)
// }

// function midValue(arr) {
//   console.log(arr);
//   if (arr.length % 2 !== 0) {
//     return arr[(arr.length - 1) / 2]
//   } else {
//     let mid = (arr.length / 2) - 1
//     return (arr[mid] + arr[mid + 1]) / 2
//   }
// }

function findMedianSortedArrays(A, B) {
  let m = A.length,
    n = B.length
  let l = Number.parseInt((m + n + 1) / 2)
  let r = Number.parseInt((m + n + 2) / 2)
  return (getkth(A, 0, B, 0, l) + getkth(A, 0, B, 0, r)) / 2.0
}

function getkth(A, aStart, B, bStart, k) {
  if (aStart > A.length - 1) return B[bStart + k - 1]
  if (bStart > B.length - 1) return A[aStart + k - 1]
  if (k == 1) return Math.min(A[aStart], B[bStart])

  let aMid = Infinity,
    bMid = Infinity
  if (aStart + k / 2 - 1 < A.length) aMid = A[aStart + k / 2 - 1]
  if (bStart + k / 2 - 1 < B.length) bMid = B[bStart + k / 2 - 1]

  if (aMid < bMid) return getkth(A, aStart + k / 2, B, bStart, k - k / 2)
  // Check: aRight + bLeft
  else return getkth(A, aStart, B, bStart + k / 2, k - k / 2) // Check: bRight + aLeft
}
nums1 = [100001]
nums2 = [100000]
let r = findMedianSortedArrays(nums1, nums2)
console.log(r)
