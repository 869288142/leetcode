var findRepeatNumber = function(nums) {
    const set = new Set();
    for (const x of nums) {
        if (set.has(x)) {
            return x;
        }
        set.add(x);
    }
};

var findRepeatNumber = function(nums) {
    let i = 0;
    while(i < nums.length) {
        
        if(nums[i] == i) {
            i++;
            continue;
        }

        if(nums[nums[i]] == nums[i]) return nums[i];

        let tmp = nums[i];
        nums[i] = nums[tmp];
        nums[tmp] = tmp;

    }
    return -1;

};