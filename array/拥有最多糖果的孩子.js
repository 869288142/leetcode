/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies = [2,3,5,1,3], extraCandies = 3) {
    let max = Math.max(...candies)
    return candies.map((candie) => candie + extraCandies >= max)
};
console.log(kidsWithCandies());