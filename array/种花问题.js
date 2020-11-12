/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed = [0,0,1,0,1], n = 1) {
    let i = 0, count = 0;
    while (i < flowerbed.length) {
        if (flowerbed[i] == 0 && (i == 0 || flowerbed[i - 1] == 0) && (i == flowerbed.length - 1 || flowerbed[i + 1] == 0)) {
            flowerbed[i] = 1;
            count++;
        }
        i++;
    }
    return count >= n 
};
console.log(canPlaceFlowers());