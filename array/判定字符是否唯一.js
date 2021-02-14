/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function(astr) {
    let set = new Set()
    for(let char of astr) {
        if(set.has(char)) {
            return false
        } else {
            set.add(char)
        }
    }
    return true
};