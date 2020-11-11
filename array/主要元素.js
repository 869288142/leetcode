/**
 * @param {number[]} nums
 * @return {number}
 */
let arr = [47,47,72,47,72,47,79,47,12,92,13,47,47,83,33,15,18,47,47,47,47,64,47,65,47,47,47,47,70,47,47,55,47,15,60,47,47,47,47,47,46,30,58,59,47,47,47,47,47,90,64,37,20,47,100,84,47,47,47,47,47,89,47,36,47,60,47,18,47,34,47,47,47,47,47,22,47,54,30,11,47,47,86,47,55,40,49,34,19,67,16,47,36,47,41,19,80,47,47,27]
var majorityElement = function(nums) {
    // 构建hash
    const hash = {}
    nums.forEach((num) => {
        if(typeof hash[num] === 'undefined') {
            hash[num] = 0
        } else {
            hash[num]++
        }
    })
    // 计算最大值
    let max = null
    let tmp = 0
    for(let key in hash) {
        if(hash[key] > max || max === null)  {
            max = hash[key]
            tmp = key
        }
    }
    // 判断最大值是否超过数组的一半
    if(hash[tmp] < Math.floor(nums.length / 2)) {
        return -1
    } else {
        return tmp
    }
};
// 摩尔投票法
var majorityElement = function(nums) {
    let major, cnt = 0;
    for(let x of nums)
    {
        if(cnt == 0)
        {
            major = x;
            cnt++;
        }
        else
        {
            if(major == x)
                cnt++;
            else
                cnt--;
        }
    }

    if(cnt > 0)
    {
        let t = 0;
        for(let x of nums)
            if(x == major)
                t++;
        if(t > nums.length/2) return major;
    }

    return -1;
}


console.log(majorityElement(arr));