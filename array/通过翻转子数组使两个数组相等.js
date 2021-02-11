/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    return target.sort().toString() === arr.sort().toString()
};
var canBeEqual = function(target, arr) {
    let bucket = new Array(1001).fill(0)

    for (let i = 0; i < target.length; i++){
        bucket[target[i]]++;
        bucket[arr[i]]--;
    }

    for(let j=0; j < bucket.length; j++){
        if(bucket[j]!=0)
            return false;
    }

    return true;
}