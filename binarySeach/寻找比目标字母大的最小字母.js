/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let lo = 0, hi = letters.length - 1;
    
    while (lo <= hi) {
        let mi = lo + Math.floor((hi - lo) / 2) ;
        if (letters[mi] <= target) lo = mi + 1;
        else hi = mi - 1;
    }

    return letters[lo % letters.length];
};