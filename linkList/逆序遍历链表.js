

var getDecimalValue = function(head) {
    let ret = 0
    let pos = 0
    let tmp =  reverseList(head)


    while(tmp !== null) {

        ret+=(tmp.val * (2 ** (pos++)) )

        tmp = tmp.next
    }


    return ret
};