/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 * 题意A的长度大于31，数字会溢出
 */
var addToArrayForm = function(A = [1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3], K =  516) {
    let r = 0
    for(let i = 0; i < A.length; i++) {
        r+=A[i] * 10 **(A.length - i - 1)
    }
    let sum =  `${r + K}`
    console.log(r+ K);
    return sum.split('').map(num => +num)
};


var addToArrayForm = function(A, K) {
    const res = [];
    const n = A.length;
    for (let i = n - 1; i >= 0 || K > 0; --i, K = Math.floor(K / 10)) {
        if (i >= 0) {
            K += A[i];
        }
        res.push(K % 10);
    }
    res.reverse();
    return res;
};


console.log(addToArrayForm());