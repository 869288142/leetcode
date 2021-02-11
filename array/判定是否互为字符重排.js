/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var CheckPermutation = function(s1 = "abb", s2 =  "aab") {
    let map = new Map()

    for(let i = 0 ; i < s1.length; i++) {
        map.set(s1[i], !map.has(s1[i]) ? 1 : (map.get(s1[i]) + 1) )
    }
    
    for(let i = 0 ; i < s2.length; i++) {
        map.set(s2[i], map.get(s2[i]) - 1)
    }
    
    let flag = true

    map.forEach((v) => {
        if(v !== 0) {
            flag = false
        } 
    })

    return  flag
};
console.log(CheckPermutation());