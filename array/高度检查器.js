/**
 * @param {number[]} heights
 * @return {number}
 * 排序后检测位置不同
 */
var heightChecker = function(heights) {
    let count = 0
    let sortedArr = [...heights].sort((a, b) => a - b)
    for(let i = 0; i < heights.length; i++) {
        if(sortedArr[i] !== heights[i]) {
            count ++
        }
    }
    return count
};

/**
 * @param {number[]} heights
 * @return {number}
 * 桶排序
 */

var heightChecker = function(heights) {

    let arr = new Array(101).fill(0)
    for (let height of heights) {
        arr[height]++;
    }
    let count = 0;
    for (let i = 1, j = 0; i < arr.length; i++) {
        while (arr[i]-- > 0) {
            if (heights[j++] != i) count++;
        }
    }
    return count;

}