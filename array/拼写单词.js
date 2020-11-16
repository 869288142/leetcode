/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
// 直接
var countCharacters = function(words = ["cat","bt","hat","tree"], chars = "atach") {
    let sum = 0
    for(let i = 0; i < words.length; i++) {
        let tmpChars = [...chars]
        for(let j = 0; j < words[i].length; j++) {
            let index = tmpChars.indexOf(words[i][j])
            if(index !== -1) {
                tmpChars[index] = -1
                if(j === words[i].length - 1) {
                    sum += words[i].length
                }
            } else {
                break
            } 
        }
    }
    return sum
};
// 比较出现次数
var countCharacters = function(words = ["cat","bt","hat","tree"], chars = "atach") {
    let charMap =  new Map();
    let count = 0
    for(let i = 0; i < chars.length; i++) {
        if(charMap.has(chars[i])) {
            charMap.set(chars[i], charMap.get(chars[i]) + 1 )
        } else {
            charMap.set(chars[i], 1 )
        }
    }
    for(let i =0; i < words.length; i++) {
        let map = new Map()
        for(let j =0; j < words[i].length; j++) {
            if(map.has(words[i][j])) {
                map.set(words[i][j], map.get(words[i][j]) + 1 )
            } else {
                map.set(words[i][j], 1)
            }
            if(!charMap.has(words[i][j]) || map.get(words[i][j]) > charMap.get(words[i][j])) {
                break;
            }
            if(j === words[i].length - 1) {
                count += words[i].length
            }
        }
    }
    return count
}
console.log(countCharacters());