/**
 * @param {number[]} salary
 * @return {number}
 * 一次同时计算max min sum 再求值
 * 时间复杂度On
 * 空间复杂度O1
 */
var average = function(salary = [4000,3000,1000,2000]) {
    let max = salary[0];
    let min = salary[0];
    let sum = 0
    for(let i = 0; i < salary.length; i++) {
        if(max <= salary[i]) {
            max = salary[i]
        }
        if( min >= salary[i] ) {
            min = salary[i]
        }
        sum += salary[i]
    }
    return (sum - min - max) / (salary.length - 2)
};
console.log(average());