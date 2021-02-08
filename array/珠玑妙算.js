/**
 * @param {string} solution
 * @param {string} guess
 * @return {number[]}
*/

var masterMind = function(solution = "RGYG", guess = "RYGG") {
    let realGuess = 0;
    let fakeGuess = 0
    let solutionArr = [...solution]
    let unMatchArr = []

    for(let i = 0; i < guess.length; i++){
        if(solutionArr[i] === guess[i]) {
            realGuess++;
            solutionArr[i] = null
        } else {
            unMatchArr.push(guess[i])
        }
    }
    for(let i = 0; i < unMatchArr.length; i++){
        let index = solutionArr.indexOf(unMatchArr[i])
        if(index !== -1) {
            solutionArr[index] = null 
            fakeGuess++
        }
    }
    return [realGuess, fakeGuess]
};
 
var masterMind = function(solution, guess) {
    let m = 0
    let n = 0
    let obj = {
      R: 0,
      G: 0,
      B: 0,
      Y: 0,
    }
    for(let i = 0; i < solution.length; i++){
      let s = solution[i]
      let g = guess[i]
      if (s === g) {
        m++
      } else {
        if(obj[s]++ < 0) n++
        if(obj[g]-- > 0) n++
      }
    }
    return [m, n]
  };
  

console.log(masterMind());