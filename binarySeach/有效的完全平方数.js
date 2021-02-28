/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let left = 1
    let right = num

    while(left <= right) {
        let mid = Math.floor((right - left) / 2 )  + left
        
        if(mid * mid === num) {
            return true
        }
        else if(mid * mid < num) {
            left = mid + 1
        }else {
            right = mid - 1
        }
    }

    return false
};