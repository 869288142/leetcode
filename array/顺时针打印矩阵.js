/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix =[[1,2,3],[4,5,6],[7,8,9]]) {
    let ret = []
    let row = 0
    let col = 0
    let n = matrix.length - 1

    // while(ret.length !== n + 1) {
        // 右
        while(col <= n) {
            console.log(`[${row}, ${col}]`);
            if(matrix[row][col] === -1) {
                row++
                break;
            }
            ret.push(matrix[row][col])
            matrix[row][col] = -1
            col++
        }

        col--
        row++

        console.log('----------------右-----------------');

        // 下
        while(row <= n) {
            console.log(`[${row}, ${col}]`);
            if(matrix[row][col] === -1) {
                col++
                break;
            }
            ret.push(matrix[row][col])
            matrix[row][col] = -1
            row++
        }

        row--
        col--

        console.log('----------------下-----------------');

        // // 左
        while(col >= 0) {
            console.log(`[${row}, ${col}]`);
            if(matrix[row][col] === -1) {
                row++
                break;
            }
            ret.push(matrix[row][col])
            matrix[row][col] = -1
            col--
        }
        col++
        row--

        console.log('----------------左-----------------');

        // 上
        while(row >= 0) {
            console.log(`[${row}, ${col}]`);
            if(matrix[row][col] === -1) {
                row--
                break;
            }
            ret.push(matrix[row][col])
            matrix[row][col] = -1
            row--
        }

        row++
        col++

        console.log('----------------上-----------------');
    // }


    


    return ret
};

var spiralOrder = function(matrix =[[1,2,3],[4,5,6],[7,8,9]]) {

    if(matrix.length == 0) return [];
        let l = 0, r = matrix[0].length - 1, t = 0, b = matrix.length - 1, x = 0;
        let  res =  new Array((r + 1) * (b + 1))
        while(true) {
            for(let i = l; i <= r; i++) res[x++] = matrix[t][i]; // left to right.
            if(++t > b) break;
            for(let i = t; i <= b; i++) res[x++] = matrix[i][r]; // top to bottom.
            if(l > --r) break;
            for(let i = r; i >= l; i--) res[x++] = matrix[b][i]; // right to left.
            if(t > --b) break;
            for(let i = b; i >= t; i--) res[x++] = matrix[i][l]; // bottom to top.
            if(++l > r) break;
        }
        return res;

}

console.log(spiralOrder());