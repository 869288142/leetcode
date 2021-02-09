/**
 * @param {number[]} arr
 * @return {number[]}
 * 时间复杂度O2
 */
var replaceElements = function(arr = [17,18,5,4,6,1]) {
    for(let i = 0; i < arr.length; i++) {
        let max = 0
        let maxIndex = 0
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] > max) {
                max = arr[j]
                maxIndex = j
            }
        }
        arr[i] = max
    }
    arr[arr.length - 1] = -1
    return arr
};

/**
 * @param {number[]} arr
 * @return {number[]}
 * 时间复杂度O2
 */
var replaceElements = function(arr = [17,18,5,4,6,1]) {
    let max = -1;
    
    for (let i = arr.length - 1; i >= 0; i--) {

        let t = arr[i];   // 保存当前元素的值

        arr[i] = max;
        
        max = Math.max(max, t);
    }
    
    return arr;
};

console.log(replaceElements());