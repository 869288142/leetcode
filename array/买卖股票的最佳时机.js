/**
 * @param {number[]} prices
 * @return {number}
 * 有题目得，一定是后面的天数减去前面的天数，可以如下枚举
 * 时间复杂度：On2
 * 空间复杂度 O1
 * 超时
 */
var maxProfit = function(prices = [3,2,6,5,0,3] ) {
    let max = 0
    for(let i = 0; i < prices.length; i++) {
        for(let j = i + 1; j < prices.length; j++) {
            if(prices[j] - prices[i] > max) {
                max = prices[j] - prices[i]
            }
        }
    }
    return max
};

/**
 * @param {number[]} prices
 * @return {number}
 * 有题目得，一定是后面的天数减去前面的天数，可以如下枚举
 * 时间复杂度：On2
 * 空间复杂度 O1
 * 超时
 */
var maxProfit = function(prices = [2,1,4] ) {
    let minprice = prices[0];
    let maxprofit = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minprice) {
            minprice = prices[i];
        } else if (prices[i] - minprice > maxprofit) {
            maxprofit = prices[i] - minprice;
        }
    }
    
    return maxprofit;

};

console.log(maxProfit());