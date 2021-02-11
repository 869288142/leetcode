/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices =[8,4,6,2,3]) {
    let ret = []
    for(let i = 0; i < prices.length; i ++){
        let price = prices[i]
        for(let j = i + 1; j < prices.length; j ++){
            if(prices[i] >= prices[j]) {
                price -= prices[j]
                break;
            }
        }
        ret[i] = price
    }
    return ret
};


var finalPrices = function(prices =[8,4,6,2,3]) {
    for(let i = 0; i < prices.length; i ++){
        for(let j = i + 1; j < prices.length; j ++){
            if(prices[i] >= prices[j]) {
                prices[i] -= prices[j];
                break;
            }
        }
    }
    return prices
};

var finalPrices = function(prices =[8,4,6,2,3]) {
        
    let stack = []

    for(let i = 0; i < prices.length; i++) {
        while(!(stack.length === 0) && prices[stack[stack.length - 1]] >= prices[i]) {
            let index = stack.pop();    
            prices[index] -= prices[i];
            r.push(prices[i])
        }
        stack.push(i);
    }   

    return prices;

};


console.log(finalPrices());