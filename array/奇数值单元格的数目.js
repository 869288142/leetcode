/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(n = 2, m = 3, indices = [[0,1],[1,1]]) {
    // 模拟数组
    let mock = []
    for(let i = 0; i < n; i++) {
        let rowArr = new Array(m).fill(0)
        mock.push(rowArr)
    }
    // 模拟加法过程
    for(let i = 0; i < indices.length; i++) {
        let [row, col] = indices[i]
        // 行模拟
        for(let k = 0; k < m; k++) {
            mock[row][k]++
        }
        // 列模拟
        for(let j = 0; j < n; j++) {
            mock[j][col]++
        }
    }
    // 遍历计算个数
    let count = 0
    for(let row = 0; row < n; row++ ) {
        for(let col = 0; col < m ; col++) {
            if(mock[row][col] % 2 !== 0) {
                count++
            }
        }
    }
    return count
};

console.log(oddCells());