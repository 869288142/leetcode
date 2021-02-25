/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 时间复杂度Onums1 + nums2 + nums1
// 空间复杂度O unique nums1 + nums2 
 */
var intersect = function(nums1, nums2) {
    // 记录交集
    let ret = []
    // 描述集合1
    let map1 = new Map()
    for(let i = 0; i < nums1.length; i++) {
        if(map1.has(nums1[i])) {
            map1.set(nums1[i], map1.get(nums1[i]) + 1)
        }else {
            map1.set(nums1[i], 1)
        }
    }
    // 描述集合2
    let map2 = new Map()
    for(let i = 0; i < nums2.length; i++) {
        if(map2.has(nums2[i])) {
            map2.set(nums2[i], map2.get(nums2[i]) + 1)
        }else {
            map2.set(nums2[i], 1)
        }
    }
    // 求集合交集
    for(let num of map1.keys()) {
        let num1Count =  map1.get(num) 
        let num2Count =  map2.get(num)
        if(num1Count && num2Count) {
            let minCount = Math.min(num1Count, num2Count)
            for(let i = 1; i <= minCount; i++) {
                ret.push(num)
            }
        }
    }

    return ret
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 时间复杂度O nums1 + nums 2
 * 空间复杂度 O min unique nums1 mums2
 */
var intersect = function(nums1 = [4,9,5], nums2 = [9,4,9,8,4]) {

    if (nums1.length > nums2.length) {
        return intersect(nums2, nums1);
    }

    let map = new Map()

    for (let num of nums1) {
        if(map.has(num)) {
            map.set(num, map.get(num) + 1)
        }else {
            map.set(num, 1)
        }
    }

    let intersection = [];

    for (let num of nums2) {
        let count = map.get(num) || 0;

        if (count > 0) {
            intersection.push(num)
            count--;
            if (count > 0) {
                map.set(num, count);
            } else {
                map.delete(num);
            }
        }
    }
    return  intersection
};



/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 直接检查另一集合是否存在这个元素
 * Edge Case : 重复元素与上次出现的位置不同
 * 时间复杂度On2
 * 空间复杂度O unique nums1
 */
var intersect = function(nums1 = 
    [1,2,2,1], nums2 = [2]) {
    let ret = []
    let map = new Map();

    for(let i = 0; i < nums1.length; i++) {
        let index = nums2.indexOf(nums1[i], map.get(nums1[i]) + 1 || 0)
        // 记录上次出现的位置
        if(index !== -1) {
            map.set(nums1[i], index)
            ret.push(nums1[i])
        }
    }

    return ret
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 时间复杂度
 * 空间复杂度O1
 */
const intersect = (nums1, nums2) => {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b); // 为了使相同元素相邻出现
    const res = [];
    let p1 = 0;                  // p1扫描nums1
    let p2 = 0;                  // p2扫描nums2
    while (p1 < nums1.length && p2 < nums2.length) { // 用&& 因为有一个越界就不能找交集
      if (nums1[p1] > nums2[p2]) { // p1指向的数大，移动p2，期待扫到一样大的
        p2++;
      } else if (nums1[p1] < nums2[p2]) { // p2指向的数大，移动p1，期待扫到一样大的
        p1++;
      } else {                   // 遇到相同的，推入res数组，两指针均右移考察下一个
        res.push(nums1[p1]);
        p1++;
        p2++;
      }
    }
    return res;
  };
  

console.log(intersect());