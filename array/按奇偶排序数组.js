/**
 * @param {number[]} A
 * @return {number[]}
 * 时间复杂度O2n
 * 空间复杂度On
 */
var sortArrayByParity = function(A) {
    let ret = []
    // 处理偶数
    for(let i = 0; i < A.length; i++) {
        if(A[i] % 2 === 0) {
            ret.push(A[i])
        }
    }
    // 处理奇数
    for(let i = 0; i < A.length; i++) {
        if(A[i] % 2 !== 0) {
            ret.push(A[i])
        }
    }
    return ret
};

/**
 * @param {number[]} A
 * @return {number[]}
 * 时间复杂度On
 * 空间复杂度On
 */
var sortArrayByParity = function(A) {
    let ret = []
    // 偶数放前面，奇数放后面
    for(let i = 0; i < A.length; i++) {
        if(A[i] % 2 === 0) {
            ret.unshift(A[i])
        }else {
            ret.push(A[i])
        }
    }
    return ret
};

/**
 * @param {number[]} A
 * @return {number[]}
 * 时间复杂度On
 * 空间复杂度O1
 * 争取原地进行
 */
var sortArrayByParity = function(A) {
    let ret = []
    // 偶数放前面，奇数放后面
    for(let i = 0; i < A.length; i++) {
        if(A[i] % 2 === 0) {
            ret.unshift(A[i])
        }else {
            ret.push(A[i])
        }
    }
    return ret
};

/**
 * 
 * @param {*} A 
 * 快排
 * 时间复杂度Onlogn
 * 空间复杂度O1
 */

var sortArrayByParity = function(A = [3,1,2,4]) {
    return A.sort((a, b) => a % 2 - b % 2)
};

/**
 * 双指针
 * 时间复杂度On
 * 空间复杂度O1
 * 
 */
var sortArrayByParity = function(A = [3,1,2,4]) {
    let i = 0, j = A.length - 1;
    while (i < j) {
        // 前面是奇数后面是偶数
        if (A[i] % 2 > A[j] % 2) {
            let tmp = A[i];
            A[i] = A[j];
            A[j] = tmp;
        }

        if (A[i] % 2 == 0) i++;
        if (A[j] % 2 == 1) j--;
    }

    return A;
}
console.log(sortArrayByParity());