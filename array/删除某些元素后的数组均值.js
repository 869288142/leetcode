/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
    // 确定范围 arr.length / 20 即为区间

    if (!arr || !arr.length) return 0

    arr.sort((a, b) => a - b)
    
    const l = arr.length, m = l / 20

    let total = 0

    for (let i = m; i < l - m; i++) total += arr[i]
    
    return total / (l - 2 * m)
};
