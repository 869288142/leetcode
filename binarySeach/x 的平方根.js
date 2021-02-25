/**
 * @param {number} x
 * @return {number}
 * 直接按题意
 */
var mySqrt = function(x) {
    return Math.floor(Math.pow(x, 0.5)) 
};

var mySqrt = function(x) {
    let l = 0, r = x, ans = -1;
    while (l <= r) {
        let mid =  l + Math.floor((r - l) / 2);
        if (mid * mid <= x) {
            ans = mid;
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return ans;
};


console.log(mySqrt(8));