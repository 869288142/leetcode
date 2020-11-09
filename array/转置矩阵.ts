// 输入：
let arr = [
    [1,2,3],
    [4,5,6]
]
// 输出：
// [
//     [1,4],
//     [2,5],
//     [3,6]
// ]

function transpose(arr: number[][]): number[][] {
    const result = []
    for(let col = 0 ; col< arr[0].length;col++){
        const tmp = []
        for(let row = 0; row < arr.length; row++) {
            tmp.push(arr[row][col])
        }
        result.push(tmp)
    }
    return result
};

let result = transpose(arr)

console.log(result);