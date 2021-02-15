/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function(n = 7) {
    let arr = []
    arr[0] = 0
    arr[1] = 1

    if(n <= 1) {
        return arr[n]
    }

    let max = 1
    for(let i = 1; 2 * i + 1 <= n; i++) {
        arr[2 * i] = arr[i]
        max = Math.max(arr[i], max)
        arr[2 * i + 1] = arr[i] + arr[i + 1]
        max = Math.max(arr[i] + arr[i + 1], max)
    }
    return max
};

var getMaximumGenerated = function(n = 7) {
    let arr = []
    arr[0] = 0
    arr[1] = 1

    if(n <= 1) {
        return arr[n]
    }

    let max = 1
    for(let i = 1; 2 * i + 1 <= n; i++) {
        let first =  arr[2 * i] = arr[i]
        let second = arr[2 * i + 1] = arr[i] + arr[i + 1]
        if(max < first) {
            max = first
        }
        if(max < second) {
            max = second
        }
    }
    return max
};

console.log(getMaximumGenerated());