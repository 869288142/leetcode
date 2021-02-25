/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var findString = function(words, s) {
    for(let i = 0; i < words.length; i ++) {
        if(s === words[i]) {
            return i
        }
    }
    return -1
};

var findString = function (words = ["", "", "", "", "ball", "", "", "", "", "", "", "", ""], s = "ball") {
    let left = 0
    let right = words.length - 1

    while (left <= right) {
        // 清理左侧空字符串
        while(!words[left]) {
            left++
        }
        // 清理右侧空字符串
        while(!words[right]) {
            right--
        }

        let mid = left + ((right - left) >> 1)
        // 处理mid左侧空字符串
        while(!words[mid] && mid < right) {
            mid++
        }
        
        if (words[mid] > s) {
            right = mid - 1
        } else if (words[mid] < s) {
            left = mid + 1
        } else {
            return mid
        }
    }

    return -1
};

console.log(findString());