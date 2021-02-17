/**
 * @param {number[]} A
 * @return {boolean}
 * 时间复杂度On
 * 空间复杂度O1
 */
var isMonotonic = function(A = [1,2,2,3]) {
    let a = 0
    let b = 0
    let eq = 0
    for(let i = 0 ; i < A.length - 1; i++) {
        if(A[i] > A[i + 1]) {
            a ++
        }else if(A[i] < A[i + 1]){
            b ++
        } else {
            eq ++
        }
    }
    return a + eq === A.length - 1 || b + eq === A.length - 1 
};

console.log(isMonotonic());