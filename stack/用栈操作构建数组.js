/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target = [1,3], n = 3) {
    let ret = []

    for(let i = 0; i < n; i++){
        console.log(target[i], i + 1);
        if(target[i] === i + 1) {
            ret.push('Push')
        }else {
            ret.push('Push')
            ret.push('Pop')
        }
    }

    return  ret
};

console.log(buildArray());