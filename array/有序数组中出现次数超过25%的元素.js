/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr = [1,2,3,3]) {
    let map = new Map()
    let count = arr.length * 0.25
    for(let i = 0; i < arr.length; i++) {
        if(map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1)
        }else {
            map.set(arr[i], 1)
        }
        if(map.get(arr[i]) > count) {
            return arr[i]
        }
    }
};

/**
 * @param {number[]} arr
 * @return {number}
 * 利用有序，可以连续计数即可
 */

var findSpecialInteger = function(arr = [1,2,3,3]) {
    let n = arr.length;
    let cur = arr[0], cnt = 0;
    for (let i = 0; i < n; ++i) {
        if (arr[i] == cur) {
            ++cnt;
            if (cnt * 4 > n) {
                return cur;
            }
        }
        else {
            cur = arr[i];
            cnt = 1;
        }
    }
    return -1;
}

var findSpecialInteger = function(arr = [1,2,3,3]) {
    let threshold = Math.floor(arr.length / 4) ;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i + threshold] == arr[i]) {
            return arr[i];
        }
    }
    return 0;
}

console.log(findSpecialInteger());