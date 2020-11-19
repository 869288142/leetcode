/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A = [4,2,5,7]) {
    let r = []
    let odd = 0
    let even = 1
    for(let i =0 ; i < A.length; i++) {
        if(A[i] % 2 === 0) {
            r[odd] = A[i]
            odd+=2
        } else if(A[i] % 2 !== 0) {
            r[even] = A[i]
            even+=2
        }
    }
    return r 
};

// 交换法

const swap = (A, i, j) => {
    const temp = A[i];
    A[i] = A[j];
    A[j] = temp;
};
var sortArrayByParityII = function(A) {
    const n  = A.length;
    let j = 1;
    for (let i = 0; i < n; i += 2) {
        if (A[i] & 1) {
            while (A[j] & 1) {
                j += 2;
            }
            swap(A, i, j);
        }
    }   
    return A;
};



console.log(sortArrayByParityII());