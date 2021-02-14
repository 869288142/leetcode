/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students = [1,1,1,0,0,1], sandwiches = 
    [1,0,0,0,1,1]) {

    while(students.length <= sandwiches.length) {
        if(!students.length) {
            break;
        }
        if(students[0] === sandwiches[0]) {
            // 学生离开队列
            students.shift()
            // 三明治出栈
            sandwiches.shift()
        }else {
            let student = students.shift()
            students.push(student)
        }
        console.log('------------------------------');
    }

    return students.length
};

/**
 * 
 * @param {*} students 
 * @param {*} sandwiches 
 * 只需要对比物品和喜欢对应物品的人
 */

var countStudents = function(students = [1,1,1,0,0,1], sandwiches = 
    [1,0,0,0,1,1]) {


    let arr = new Array(2).fill(0)

    for (let i = 0; i < students.length; ++i) {
        ++arr[students[i]];
    }
    for (let i = 0; i < sandwiches.length; ++i) {
        if(arr[sandwiches[i]] === 0) {
            break;
        }
        --arr[sandwiches[i]];
    }


    return arr[0] + arr[1];

}

countStudents();