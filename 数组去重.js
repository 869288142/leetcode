let nums =  [0,0,1,1,1,2,2,3,3,4]
var removeDuplicates = function(nums) {
  nums.forEach((e, index, arr) => {
    if(nums.lastIndexOf(e)=== index){
      nums.unshift(e)
      // nums.splice(index, 1)
    }
  })
  return nums
}
console.log(removeDuplicates(nums))
