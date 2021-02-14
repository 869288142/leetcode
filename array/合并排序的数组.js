/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
/**
 * 想法一
 * 合并后排序,没有充分利用题目条件
 * 
 * 想法二
 * 比较合并，没有在原地进行
 */
var merge = function(A = [1,2,3,0,0,0], m = 3, B = [2,5,6], n = 3) {
    let ret = []
    let minLength = Math.min(m, n)
    let k  = 0
    let i = 0;
    let j = 0
    for(;i < minLength && j < minLength;) {
        if(A[i] >= B[j]) {
            ret[k] = B[j++]
        }else {
            ret[k] = A[i]
        }
        k++
    } 

    while(i < m) {
        ret[++k] = A[i++]
    }

    while(i < n) {
        ret[++k] = B[i++]
    }

    return ret
};

var merge = function(A = [1,2,3,0,0,0], m = 3, B = [2,5,6], n = 3) {
    let pa = m - 1, pb = n - 1;
    let tail = m + n - 1;
    let cur;
    while (pa >= 0 || pb >= 0) {
        if (pa == -1) {
            cur = B[pb--];
        } else if (pb == -1) {
            cur = A[pa--];
        } else if (A[pa] > B[pb]) {
            cur = A[pa--];
        } else {
            cur = B[pb--];
        }
        A[tail--] = cur;
    }
};

console.log(merge());