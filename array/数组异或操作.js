/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 * 时间复杂度O2n
 * 空间复杂度On
 */
var xorOperation = function(n, start) {
    let mock = []
    // 生成模拟数组
    for(let i = 0; i < n; i++) {
        mock[i] = start + 2 * i
    }
    // 执行异或结果
    let ret = 0
    for(let i = 0; i < n; i++) {
        ret^=mock[i]
    }
    return ret

};

/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 * 时间复杂度On
 * 空间复杂度O1
 */
var xorOperation = function(n, start) {
    // 执行异或结果
    let ret = 0
    for(let i = 0; i < n; i++) {
        ret^=start + 2 * i
    }
    return ret
};