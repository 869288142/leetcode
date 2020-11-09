let A =  [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
function flipAndInvertImage(A) {
    for(let row = 0; row < A.length ; row++) {
        for(let col = 0; col < Math.floor((A[0].length + 1) / 2)  ; col++) {
            const tmp = A[row][col] ^ 1
            A[row][col] = A[row][A[0].length - 1 - col] ^ 1;
            A[row][A[0].length - 1 - col] = tmp;
        }
    }
    return A
};

console.log(flipAndInvertImage(A));