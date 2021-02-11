/**
 * @param {string[]} A
 * @return {string[]}
 * 求公共字符串出现次数最小值
 */
var commonChars = function(A = ["dadaabaa","bdaaabcc","abccddbb","bbaacdba","ababbbab","ccddbbba","bbdabbda","bdabaacb"]) {
    let ret = []

    let hashTable = A.map((chars) => {
        let map = new Map()
        for(let i = 0 ; i < chars.length; i++) {
            if(map.has(chars[i])) {
                map.set(chars[i], map.get(chars[i]) + 1)
            }else {
                map.set(chars[i], 1)
            }
        }
        return map
    })

    hashTable[0].forEach((_, key ) => {
        let minCount = hashTable[0].get(key)
        for(let j = 1; j < hashTable.length; j++) {
            let count = hashTable[j].get(key)
            if(count) {
                minCount = Math.min(count, minCount)
            }else {
                key = ''
                break;
            }
        }
        if(key) {
            for(let i = 1; i <= minCount; i++) {
                ret.push(key)
            }
        }
    })

    return ret

};


const getCommon = (a, b) => {

    // 设置哈希映射存储字母出现次数
    const map = new Map();
  
    // 遍历 a 字符串，并存储字母及其次数
    for (let i = 0; i < a.length; i++) {
      const aData = map.get(a[i]);
      if (!aData) {
        map.set(a[i], 1);
      } else {
        map.set(a[i], aData + 1);
      }
    }
  
    // 设置共同字符串
    const result = [];
  
    // 遍历 b 字符串，将其含有和 a 相同的取出来
    for (let i = 0; i < b.length; i++) {
      const bData = map.get(b[i]);
      if (bData) {
        result.push(b[i]);
        map.set(b[i], bData - 1);
      }
    }
  
    // 返回结果
    return result;
  };
  
  /**
   * @name 主函数
   * @param {string[]} A 需要判断的数组
   * @return {string[]} 返回相同字符串组成的数组
   */
  var commonChars = (A) => {
    return A.reduce((prev, next) => getCommon(prev, next))
  };
  
var commonChars = function(A = ["bella","label","roller"]) {
  let minfreq = new Array(26).fill(Number.MAX_VALUE)

  for (let word of A) {
    let freq = new Array(26).fill(0)
    for (let i = 0; i < word.length; ++i) {
    
    freq[word[i].charCodeAt() - 'a'.charCodeAt()]++;
    }
    for (let i = 0; i < 26; ++i) {
    minfreq[i] = Math.min(minfreq[i], freq[i]);
    }
  }

  let ans = []
  for (let i = 0; i < 26; ++i) {
    for (let j = 0; j < minfreq[i]; ++j) {
    ans.push(String.fromCharCode(i + 'a'.charCodeAt()))
    }
  }
  return ans;
}


console.log(commonChars());


