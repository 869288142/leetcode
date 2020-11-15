/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    let temp = [...arr]
    let res = []
    arr = [...new Set(arr)]
    arr.sort((a,b)=>a-b)
    let map = {}
    for(let i=arr.length-1;i>=0;i--){
      map[arr[i]] = i+1
    }
    for(let i=0;i<temp.length;i++){
      res.push(map[temp[i]])
    }
    return res
};

var arrayRankTransform = function(array) {
    // 通过原数组创建一个新的数组,并对它进行排序
    const newArray = [...array].sort((a, b) => a - b);
    // 计算出排序后的数组元素的序号,并使用map存储
    const rankMap = getRankMap(newArray);
    return array.map(key => rankMap.get(key));
};
function getRankMap(array) {
    // key = 元素的数值, value = 元素对应的序号
    const rankMap = new Map();
    let rank = 1;
    for(let key of array) {
        // 避免重复计算序号,这样也可以达到去重的效果
        if(!rankMap.has(key)) {
            rankMap.set(key, rank++);
        }
    }
    return rankMap;
}
console.log(arrayRankTransform());