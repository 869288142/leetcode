/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 生成单调栈同时记录数字的next Greater Number,最后查表一次
 * 时间复杂度On
 * 空间复杂度On
 */
var nextGreaterElement = function(nums1, nums2) {
    let ans = [];

    let map = new Map()

    let stack = [];

    for (let i = nums2.length - 1; i >= 0; i--) { // 倒着往栈里放
        while (!(stack.length === 0) && stack[stack.length - 1] <= nums2[i]) { // 判定个子高矮
            stack.pop(); // 矮个起开，反正也被挡着了。。。
        }
        
        // 这个元素身后的第一个高个
        map.set(nums2[i], stack.length === 0 ? -1 : stack[stack.length - 1])

        stack.push(nums2[i]); // 进队，接受之后的身高判定吧！
    }

    for(let i = 0; i < nums1.length; i++) {
        ans[i] = map.get(nums1[i]) || -1
    }

    return ans;
    
};

console.log(nextGreaterElement([4,1,2], [1,3,4,2]));