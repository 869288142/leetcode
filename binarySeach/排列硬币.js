/**
 * @param {number} n
 * @return {number}
 * 模拟法
 * 时间复杂度On
 * 空间复杂度O1
 */
var arrangeCoins = function(n = 1) {
    
    // Edge Case, n === 0
    if(n === 0) {
        return 0
    }

    let i = 0
    // 这里合并n=== 0再减一次，这样所有的下标就都是 i - 1了
    while(n >=0) {
        i++
        n-=i
    }

    return i - 1
};

/**
 * @param {number} n
 * @return {number}
 * 等差公式求和向下取整
 */
var arrangeCoins = function(n = 1) {
    return Math.floor(Math.sqrt(2) * Math.sqrt(n + 0.125) - 0.5);
};

/**
 * @param {number} n
 * @return {number}
 * 二分，缩进标准为等差公式
 */
var arrangeCoins = function(n = 1) {
    let low = 0, high = n;
    while (low <= high) {
        let mid = Math.floor((high - low) / 2)  + low;
        let cost = ((mid + 1) * mid) / 2;
        if (cost == n) {
            return mid;
        } else if (cost > n) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return high;
};

console.log(arrangeCoins());