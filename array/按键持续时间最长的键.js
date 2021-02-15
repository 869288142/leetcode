/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function(releaseTimes = [9,29,49,50], keysPressed = "cbcd") {
    let hash = {}
    let ret = ''
    // 计数
    for(let i = 0; i < releaseTimes.length; i++) {
        hash[keysPressed[i]] = i === 0 ? releaseTimes[i] : releaseTimes [i] - releaseTimes [ i - 1 ]
    }
    // 最大值
    let max = 0;
    for(let [k,v] of Object.entries(hash)) {
        if(max <= v) {
            max = v
        }
    }
    // 最大值序列
    for(let [k, v] of Object.entries(hash)) {
        if(v === max) {
            ret+=k
        }
    }
    console.log(ret);
    // 排序
    return ret.split('').sort((a,b) => b.charCodeAt() - a.charCodeAt())[0]
};

console.log(slowestKey());