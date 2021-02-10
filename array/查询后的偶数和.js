/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(A, queries) {
    let ret = []
    for(let i = 0; i < queries.length; i++) {
        A[queries[i][1]] += val = queries[i][0]
        let sum = 0
        for(let j = 0 ; j < A.length; j ++) {
            if(A[j] % 2 === 0) {
                sum += A[j]
            }
        }
        ret[i] = sum
    }
    return ret
};

var sumEvenAfterQueries = function(A, queries) {
    let S = 0
    let ret = []
    for(let i = 0; i < queries.length; i++) {
        if(A[i] % 2 === 0)
        S += A[i]
    }
    for(let i = 0; i < queries.length; i++) {
        let val = queries[i][0], index = queries[i][1];
        if (A[index] % 2 == 0) S -= A[index];
        A[index] += val;
        if (A[index] % 2 == 0) S += A[index];
        ret[i] = S;
    }
    return ret
}

