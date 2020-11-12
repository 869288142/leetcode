/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    let r = false
    for(let index = 0; index < arr.length - 2 ; index++) {
        if(arr[index] % 2!= 0 && arr[index + 1] % 2!= 0 && arr[index + 2] % 2!= 0) {
            r = true
        }
    }
    return r 
};