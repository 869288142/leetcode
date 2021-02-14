/**
 * @param {number[][]} matrix
 * @return {number[]}
 * 模拟法
 * 
 */
var luckyNumbers  = function(matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]) {
    let ret = []
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[0].length; j++){
            let rowMin = Number.MAX_SAFE_INTEGER
            for(let col = 0; col < matrix[0].length; col++) {
                if(matrix[i][col] < rowMin) {
                    rowMin = matrix[i][col]
                }
            }
            let colMax = 0
            for(let row = 0; row < matrix.length; row++) {
                if(matrix[row][j] > colMax) {
                    colMax = matrix[row][j]
                }
            }
            if(rowMin === matrix[i][j] && colMax === matrix[i][j]) {
                ret.push(matrix[i][j])
            }
        }
    }
    return ret 
};


var luckyNumbers  = function(matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]) {
    let ret = []
    let rowMin = []
    let colMax = []

    for(let i = 0; i < matrix.length; i++) {
        rowMin[i] = Math.min(...matrix[i])
    }

    for(let i = 0; i < matrix[0].length; i++) {
        let curColMax = 0
        for(let j = 0; j < matrix.length; j++) {
            if(curColMax < matrix[j][i]) {
                curColMax = matrix[j][i]
            }
        }
        colMax[i] = curColMax
    }
    
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[0].length; j++){
            if(rowMin[i] === matrix[i][j] && colMax[j] === matrix[i][j]) {
                ret.push(matrix[i][j])
            }
        }
    }
    return ret 
};


console.log(luckyNumbers());