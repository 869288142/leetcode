/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function(lowLimit = 1, highLimit = 10) {
    let map = new Map();
    // 模拟计算结果
    for(let i = lowLimit; i <= highLimit; i++) {
        let sum = 0
        
        let cur = i
        // 计算位和
        while(cur) {
            sum+= (cur % 10)
            cur = (cur - cur % 10) / 10 
        }

        if(map.get(sum)) {
            map.set(sum, map.get(sum) + 1)
        }else {
            map.set(sum, 1)
        }
    }
    // 选取最大值
    let max = 0
    for(let k of map.keys()) {
        if(map.get(k) >= max) {
            max = map.get(k)
        }
    }
    return max
};
console.log(countBalls());

