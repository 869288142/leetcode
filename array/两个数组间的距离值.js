/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
    let count = 0
    for(let i = 0; i < arr1.length; i++) {
        let flag = true
        for(let j = 0; j < arr2.length; j++) {
            if(Math.abs(arr1[i] - arr2[j]) <= d) {
                flag = false
                break;
            }
        }
        if(flag) {
            count++
        }
    }
    return count
};

var findTheDistanceValue = function(arr1, arr2, d, n = 0) {
    arr2.sort((a, b) => a - b)
    var binary = (v) => {
        var l = 0, r = arr2.length - 1
        while(l <= r) {
            var m = l + (r - l >> 1), t = arr2[m]
            if (t === v) return m
            else if (t > v) r = m - 1
            else l = m + 1
        }
        return l
    }
    for (var v of arr1) {
        var i = binary(v), f = true
        if (arr2[i] - v <= d || i !== 0 && v - arr2[i - 1] <= d) f = false
        if (f) n++
    }
    return n
};
