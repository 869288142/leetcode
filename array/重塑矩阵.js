/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums = [[1,2],[3,4]], r = 4, c = 1 ) {
    let result = []
    result.length = r
    for(let i = 0 ; i < result.length ; i++ ){
        result[i] = []
    }
    if(nums.length * nums[0].length < r * c) {
        return nums
    }
    let row = 0;
    let col = 0;
    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums[i].length; j++) {
            result[row][col] = nums[i][j]
            if(col >= c - 1) {
                row++
                col = 0
            } else {
                col++
            }
        }
    }
    return result
};

console.log(matrixReshape());