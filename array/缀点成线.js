/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]) {
    let dx1 = coordinates[0][0] -  coordinates[1][0] 
    let dy2 = coordinates[0][1] -  coordinates[1][1] 
    for(let i = 1; i < coordinates.length - 1; i++) {
        let dx = coordinates[ i + 1 ][0] -  coordinates[i][0] 
        let dy = coordinates[ i + 1 ][1] -  coordinates[i][1] 
        if(dx1 * dy !== dx * dy2 ) {
            return false
        }
    }
    return true
};

console.log(checkStraightLine());