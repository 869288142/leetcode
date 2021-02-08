/**
 * @param {number[][]} dominoes
 * @return {number}
 * 计数加计算组合数
 */
function reverseString(str) {
    let r = ''
    for(let i = str.length - 1; i >= 0 ; i--) {
        r+=str[i]
    }
    return r
}

var numEquivDominoPairs = function(dominoes = [[1,2],[2,1],[3,4],[5,6]]) {
    const hash = {}

    for(let i = 0; i < dominoes.length; i++) {

        let key = dominoes[i].toString()
        let reverseKey = reverseString(key)

        if( (typeof hash[key] !== 'undefined')  ) {
            hash[key] ++
        }else if((typeof hash[reverseKey] !== 'undefined')) {
            hash[reverseKey] ++
        } else {
            hash[key] = 1
        }
    }

    let max = 0

    for(let key of Object.keys(hash)) {
        if(hash[key]!== 1) {
            max+=( (hash[key] *  (hash[key] - 1)) / 2) 
        }
    }

    return max
};
/**
 * 限定二元组，可以通过整数来计数
 * @param {*} dominoes 
 */
var numEquivDominoPairs = function(dominoes) {
    const num = new Array(100).fill(0);
    let ret = 0;
    for (const domino of dominoes) {
        const val = domino[0] < domino[1] ? domino[0] * 10 + domino[1] : domino[1] * 10 + domino[0];
        ret += num[val];
        num[val]++;
    }
    return ret;
};


console.log(numEquivDominoPairs());
