/**
 * @param {number[]} A
 * @return {boolean[]}
 * 没法模拟，只能构思
 */
var prefixesDivBy5 = function(A) {
    const list = [];
    let prefix = 0;
    const length = A.length;
    for (let i = 0; i < length; i++) {
        prefix = ((prefix << 1) + A[i]) % 5;
        list.push(prefix === 0);
    }
    return list;
};

/**
 * @param {number[]} A
 * @return {boolean[]}
 * 状态机
 */
var prefixesDivBy5 = function(A) {

    let res = []
    if (A.length < 1) return res;

    let StateSet = [
        [0, 1],
        [2, 3],
        [4, 0],
        [1, 2],
        [3, 4]
    ]

    let state = 0;

    for (let i = 0; i < A.length; i++) {

        state = StateSet[state][A[i]];  //转换后的状态

        if (state == 0) {
            res.push(true);
        } else {
            res.push(false);
        }

    }
    
    return res;
};

