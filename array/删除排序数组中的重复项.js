/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums = [1,1,2]) {
    for(let i = 0; i < nums.length - 1  ; i++) {
         let index = nums.indexOf(nums[i], i + 1)
         if(index !== -1){
            nums.splice(index, 1)
         }
    }
    return nums
};

var removeDuplicates = function(nums = [1,1,2]) {
    if (nums.length == 0) return 0;

    let i = 0;

    for (let j = 1; j < nums.length; j++) {
        if (nums[j] != nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    
    return i + 1;
};
console.log(removeDuplicates());