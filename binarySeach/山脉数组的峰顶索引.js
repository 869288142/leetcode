/**
 * @param {number[]} arr
 * @return {number}
 * 题目保证其只有一个顶峰，那么第一个拐点就是峰顶
 * 时间复杂度On
 * 空间复杂度O1
 */
var peakIndexInMountainArray = function(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < arr[i - 1]) {
            return i - 1
        }
    }
};

/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr = 
    [0,2,1,0]) {
    let left = 0
    let right = arr.length - 1

    while(left <= right) {
        let mid =  Math.floor((left + right) / 2) 

        if(arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]){
            return mid;
        }else if(arr[mid]>arr[mid + 1]){
            right = mid - 1;
        }else {
            left = mid + 1;
        }
    }

    
    return - 1
};

console.log(peakIndexInMountainArray());