/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 * 计数排序
 */
var relativeSortArray = function (arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 =  [2,1,4,3,9,6]) {
    const counts = new Array(1001).fill(0);
    let result = []

    for(let i of arr1){
        counts[i]++
    }

    for(let v of arr2) {
        while(counts[v] > 0) {
            result.push(v)
            counts[v]--
        }
    }

    for(let i = 0; i < counts.length; i++) {
        while(counts[i] >0) {
            counts[i]--
            result.push(i)
        }
    }

    return result
  
};


var relativeSortArray = function(arr1, arr2) {
    return arr1.sort((a, b, 
        i = arr2.findIndex(v => v === a), j = arr2.findIndex(v => v === b)) => (i === -1 ? 1000 + a : i) - (j === -1 ? 1000 + b : j))
};


console.log(relativeSortArray());