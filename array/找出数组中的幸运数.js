/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr = [2,2,3,4]) {
    let map = new Map()

    for( let v of arr ) {
        if(map.has(v)) {
            map.set(v, map.get(v) + 1)
        }else {
            map.set(v,  1)
        }
    }

    let max = -1
    for(let num of map.keys()) {
        if(num === map.get(num) && num > max) {
            max = num
        } 
    }
    return max
};

console.log(findLucky());