/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points = [[1,1],[3,4],[-1,0]]) {
    let s = 0
    for(let i = 0 ; i < points.length - 1; i++) {
        let dx =  Math.abs(points[i][0]- points[i + 1][0]) 
        let dy = Math.abs(points[i][1] -  points[i + 1][1])
        s += Math.max(dx, dy)
    }
    return s
};

console.log(minTimeToVisitAllPoints());