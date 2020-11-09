// 输入：[-4,-1,0,3,10]
// 输出：[0,1,9,16,100]
let arr = [-4,-1,0,3,10]
// 普通解法
// function sortedSquares(arr: number[]): number[] {
//     return arr.map((item) => item ** 2 ).sort((a, b) => a - b)
// };
// 双指针解法
function sortedSquares(arr: number[]): number[] {
    let s = 0;
    let e = arr.length - 1
    let result = []
    let pos = arr.length - 1
    while(s <= e) {
        if((arr[s] * arr[s]) >= (arr[e] * arr[e])) {
            result[pos] = arr[s] * arr[s]
            s++
        }else {
            result[pos] = arr[e] * arr[e]
            e--
        }
        pos--
    }
    return result
};
console.log(sortedSquares(arr));