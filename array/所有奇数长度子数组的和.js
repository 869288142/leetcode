/**
 * @param {number[]} arr
 * @return {number}
 */
let arr = [1,4,2,5,3]
// var sumOddLengthSubarrays = function(arr) {
//     let sum = 0
//     for(let j = 1; j <= arr.length; j ++) {
//         if(j % 2 != 0) {
//             for(let i = 0 ; i < arr.length && (i + j) <= arr.length; i++) {
//                 let tmpSum = 0
//                 for(let k = i; k < i + j; k++ ) {
//                     tmpSum+=arr[k]
//                 }
//                 sum += tmpSum
//             }
//         }
//     }
//     return sum
// };
// 计算数值出现的规律
var sumOddLengthSubarrays = function(arr) {
    let res = 0;
    for(let i = 0; i < arr.length; i ++){
        let left = i + 1, right = arr.length - i,
            left_even = Math.floor((left + 1) / 2), right_even = Math.floor((right + 1) / 2),
            left_odd = Math.floor(left / 2), right_odd = Math.floor(right / 2);

        res += (left_even * right_even + left_odd * right_odd) * arr[i];
    }
    return res;
};

console.log(sumOddLengthSubarrays(arr));
