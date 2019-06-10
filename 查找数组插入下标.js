// 给定一个升序数组，元素无重复，若目标值存在于数组中，返回该下标，否则返回数字应该存在的下标

// 思路1
// target小于等于数组元素,直接返回大于等于target的第一个下标
// target大于元素最大值，直接返回数组下标最大值
var searchInsert = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i
    }
  }
  return nums.length
}

// 思路2
// 利用二分查找右指针会移动到小于target的下标处，并且让target和mid相等的情况和小于的情况归一化
// mid小于target时，则正常移动left
var searchInsert = function(nums, target) {
  let left = 0
  let right = nums.length - 1
  let mid = null
  while (left <= right) {
    mid = Number.parseInt((left + right) / 2)
    if(nums[mid] >= target) {
      right = mid - 1
    } 
    if(nums[mid] < target) {
      left = mid + 1
    }
  }
  return right + 1
}
