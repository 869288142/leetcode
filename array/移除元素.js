/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(arr, val) {
  let len = arr.length
   for(let i=0,times=0; times<=len; i++){
     if(arr[i] === val){
       arr.splice(i,1)
       i--;
     }
     times++
   }
   return arr.length
 };

 var removeElement = function(nums, val) {
  let ans = 0;
  for(const num of nums) {
      if(num != val) {
          nums[ans] = num;
          ans++;
      }
  }
  return ans;
};
