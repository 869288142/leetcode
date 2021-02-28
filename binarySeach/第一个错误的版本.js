/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 * 依次查找
 * 时间复杂度On
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        for(let i = 1; i <= n; i++) {
            if(isBadVersion(i)) {
                return i 
            }
        }
    };
};

var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let right = n
        let left = 1
        while(left < right) {
            let mid = Math.floor((right - left) / 2) + left
            if(isBadVersion(mid)) {
                right = mid 
            }else {
                left = mid + 1;
            } 
        }
        return left
    };

};