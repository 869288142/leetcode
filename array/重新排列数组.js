/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 * 时间复杂度On
 * 空间复杂度O1
 */
var shuffle = function(nums = [2,5,1,3,4,7], n = 3) {
    let ret = []
    let j = 0
    for(let i = 0 ; i < n ; i++) {
        // 当前位置对应的元素
        ret [j] = nums[i]
        // 下一个即xn对应的yn的元素
        ret [j + 1] = nums[i + n]
        // 移动到下一组下标
        j+=2
    }
    return ret
};

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 * 时间复杂度On
 * 空间复杂度O1
 * 把交换后的值存在位上，交换完成后还原
 */
var shuffle = function(nums = [2,5,1,3,4,7], n = 3) {
    for(let i = 0; i < 2 * n; i ++){
        
        let j = i < n ? 2 * i : 2 * (i - n) + 1;

        nums[j] |= (nums[i] & 1023) << 10;
    }
    nums.forEach((e, index) => {
        nums[index] = e>>10
    }) 
    return nums;
};

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 * 时间复杂度On
 * 空间复杂度O1
 * 把交换后的值存在位上，交换完成后还原
 */
var shuffle = function(nums = [2,5,1,3,4,7], n = 3) {
    for(let i = 0; i < 2 * n; i ++)
        if(nums[i] > 0){
            
            // j 描述当前的 nums[i] 对应的索引，初始为 i
            let j = i; 

            while(nums[i] > 0){

                // 计算 j 索引的元素，也就是现在的 nums[i]，应该放置的索引
                j = j < n ? 2 * j : 2 * (j - n) + 1; 

                // 把 nums[i] 放置到 j 的位置，
                // 同时，把 nums[j] 放到 i 的位置，在下一轮循环继续处理
                let tmp = nums[i]
                nums[i] = nums[j]
                nums[j] = tmp

                // 使用负号标记上，现在 j 位置存储的元素已经是正确的元素了 
                nums[j] = -nums[j]; 
            }
        }

        nums.forEach((e, index) => {
            nums[index] = -e
        }) 
        return nums
};

console.log(shuffle());