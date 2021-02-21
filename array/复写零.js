/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 * 往空位插入0，然后删除多余部分即可，使用splice
 * 时间复杂度On2
 * 空间复杂度O1
 */
var duplicateZeros = function(arr = [1,0,2,3,0,4,5,0]) {
    let n = arr.length
    for(let i = 0; i < n; i++) {
        if(arr[i] === 0) {
            arr.splice(i, 0, 0)
            i++
        }
    }
    arr.length = n
};

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 * 往空位插入0，然后删除多余部分即可，自行实现插入和平移
 * 时间复杂度On2
 * 空间复杂度O1
 */
var duplicateZeros = function(arr = [1,0,2,3,0,4,5,0]) {
    let n = arr.length
    for(let i = 0; i < n; i++) {
        if(arr[i] === 0) {
            // 1. 将i+1都往后移一位
            for(let j = n - 1; j > i ; j--) {
                arr[j] =  arr[j - 1]
            }
            i++
        }
    }
};


/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 * 往空位插入0，将元素依次复制进入新数组即可
 * 时间复杂度O2n
 * 空间复杂度On
 */
var duplicateZeros = function(arr = [1,0,2,3,0,4,5,0]) {
    let ret = []
    let index = 0
    const n = arr.length 

    for(let i = 0; i < n; i++) {
        if(index >= n) {
            break;
        }
        if(arr[i] !== 0) {
            ret[index] = arr[i]
            index++
        }else {
            // d位置
            ret[index] = 0
            index++
            // d + 1位置
            ret[index] = 0
            index++
        }
    }

    for(let i = 0; i < arr.length; i++) {
        arr[i] = ret[i]
    }
};


/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 * 往空位插入0，将元素依次复制进入新数组即可
 * 时间复杂度O2n
 * 空间复杂度O1
 */
var duplicateZeros = function(arr = [1,0,2,3,0,4,5,0]) {
    let ret = []
    let index = 0
    const n = arr.length 

    for(let i = 0; i < n; i++) {
        if(index >= n) {
            break;
        }
        if(arr[i] !== 0) {
            ret[index] = arr[i]
            index++
        }else {
            // d位置
            ret[index] = 0
            index++
            // d + 1位置
            ret[index] = 0
            index++
        }
    }

    for(let i = 0; i < arr.length; i++) {
        arr[i] = ret[i]
    }
};


/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 * 预留位置然后处理即可,计算O丢弃起始位置，然后一次移动即可
 * 时间复杂度O2n
 * 空间复杂度O1
 */
var duplicateZeros = function(arr = [1,0,2,3,0,4,5,0]) {
    let possibleDups = 0;
    let length_ = arr.length - 1;

    // Find the number of zeros to be duplicated
    // Stopping when left points beyond the last element in the original array
    // which would be part of the modified array
    for (let left = 0; left <= length_ - possibleDups; left++) {

        // Count the zeros
        if (arr[left] == 0) {

            // Edge case: This zero can't be duplicated. We have no more space,
            // as left is pointing to the last element which could be included  
            if (left == length_ - possibleDups) {
                // For this zero we just copy it without duplication.
                arr[length_] = 0;
                length_ -= 1;
                break;
            }
            possibleDups++;
        }
    }

    // Start backwards from the last element which would be part of new array.
    let last = length_ - possibleDups;

    // Copy zero twice, and non zero once.
    for (let i = last; i >= 0; i--) {
        if (arr[i] == 0) {
            arr[i + possibleDups] = 0;
            possibleDups--;
            arr[i + possibleDups] = 0;
        } else {
            arr[i + possibleDups] = arr[i];
        }
    }
};


console.log(duplicateZeros());