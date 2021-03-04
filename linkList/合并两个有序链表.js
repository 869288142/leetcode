/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let ret = new ListNode(-1)
    let cur = ret
    while(l1 !== null && l2 !== null) {
        
        let val = null
        if(l1.val >= l2.val) {
            val = l2.val
            l2 = l2.next
        }else {
            val = l1.val
            l1 = l1.next
        }
        cur.val = val
        cur.next = new ListNode()
        cur = cur.next
    }

    while(l1 !== null ) {
        cur = new ListNode()
        cur.val = l1.val
        cur = cur.next
        l1 = l1.next
    }

    while(l2 !== null ) {
        cur = new ListNode()
        cur.val = l2.val
        cur = cur.next
        l2 = l2.next
    }
    

    return ret === cur ? null : ret
};