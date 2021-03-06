/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// 枚举
var twoSum = function(numbers, target) {
    for(let i = 0 ; i < numbers.length; i++) {
        for(let j = i + 1 ; j < numbers.length; j++) {
            if(numbers[i] + numbers[j] === target) {
                return [i + 1, j + 1]
            }
        }
    }
    return []
};
// 双指针
var twoSum = function(numbers = [2,3,4]
    , target = 6) {
        let low = 0, high = numbers.length - 1;
        while (low < high) {
            total = numbers[low] + numbers[high]
            if (total == target) {
                return [low + 1, high + 1]
            }
            else if (total < target) {
                low += 1
            }
            else {
                high -= 1
            }
        }
        return [-1, -1]
}

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers = [2,3,4]
    , target = 6) {
        for (let i = 0; i < numbers.length; ++i) {
            let low = i + 1, high = numbers.length - 1;
            while (low <= high) {
                let mid =  Math.floor((high - low) / 2) + low;
                if (numbers[mid] == target - numbers[i]) {
                    return [i + 1, mid + 1];
                } else if (numbers[mid] > target - numbers[i]) {
                    high = mid - 1;
                } else {
                    low = mid + 1;
                }
            }
        }
        return [ -1, -1];
}

console.log(twoSum());