/**
 * @param {number[]} arr
 * @return {boolean}
 * 依次检查
 * 时间复杂度n2
 * 空间复杂度1
 */

var checkIfExist = function(arr = [0, 0]) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] / arr[j] === 2 || arr[i] / arr[j] === 1 / 2 || (arr[i] === 0 && arr[j] === 0)) {
                return true
            }
        }    
    }
    return false
};

var checkIfExist = function(arr = [0, 0]) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(arr[i] ===  2 * arr[j] && i !== j) {
                return true
            }
        }    
    }
    return false
};


var checkIfExist = function(arr = [0, 0]) {
    let hash = {}
    arr.forEach(num => {
        if(typeof hash[num] === 'undefined') {
            hash[num] = 1
        } else {
            hash[num]++
        }
    })
    for(let i = 0; i < arr.length; i++) {
        if(hash[arr[i] * 2] >= 1 && arr[i] !== 0) 
            return true
        if(hash[arr[i] * 2] >= 2 && arr[i] === 0) 
            return true
    }
    return false
};


console.log(checkIfExist());