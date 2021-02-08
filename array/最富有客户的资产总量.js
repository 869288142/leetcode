/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts = [[2,8,7],[7,1,3],[1,9,5]]) {
    let max = 0
    for(let i = 0; i < accounts.length; i++) {
        let curAccountCount = 0 

        let curAccount = accounts[i]

        for(let j = 0; j < curAccount.length ; j ++) {
            curAccountCount+=curAccount[j]
        }
        
        if(curAccountCount > max) {
            max = curAccountCount
        }
    }
    return max
};

console.log(maximumWealth());