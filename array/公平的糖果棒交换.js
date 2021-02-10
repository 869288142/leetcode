/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */



var fairCandySwap = function(A = [1,2], B = [2,3]) {
    let sumA = 0
    for(let i = 0 ; i < A.length; i++) {
        sumA += A[i]
    }
    for(let i = 0 ; i < B.length; i++) {
        sumA -= B[i]
    }

    let diffVal = sumA / 2

    for(let i = 0; i < A.length; i++) {
        for(let j = 0; j < B.length; j++){
            if(A[i] - B[j]  === diffVal) {
                return [A[i], B[j]]
            }
        }
    }
};

var fairCandySwap = function(A, B) {
    let sumA = 0
    
    for(let i = 0 ; i < A.length; i++) {
        sumA += A[i]
    }
    for(let i = 0 ; i < B.length; i++) {
        sumA -= B[i]
    }

    let delta = sumA / 2

    const rec = new Set(A);
    var ans;
    for (const y of B) {
        const x = y + delta;
        if (rec.has(x)) {
            ans = [x, y];
            break;
        }
    }
    return ans;
};


console.log(fairCandySwap());