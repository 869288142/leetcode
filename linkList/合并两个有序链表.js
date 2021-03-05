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
 *  双指针遍历一次即可
 * EdgeCase,哨兵：
 * 1. 解决没有节点的处理
 * 2. 解决next节点链接的问题
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
        
        cur.next = new ListNode()
        cur = cur.next
        cur.val = val
    }

    while(l1 !== null ) {
        cur = cur.next = new ListNode()
        cur.val = l1.val
        l1 = l1.next
    }

    while(l2 !== null ) {
        cur = cur.next = new ListNode()
        cur.val = l2.val
        l2 = l2.next
    }

    return ret.next
};

var mergeTwoLists = function(l1, l2) {

    let ret = new ListNode(-1)
    let cur = ret

    while(l1 !== null && l2 !== null) {
        if(l1.val >= l2.val) {
            cur.next = l2
            l2 = l2.next
        }else {
            cur.next = l1
            l1 = l1.next
        }
        cur = cur.next
    }

    cur.next = l1 == null ? l2 : l1;

    return ret.next
};

var mergeTwoLists = function(l1, l2) {
    if (l1 === null) {
        return l2;
    } else if (l2 === null) {
        return l1;
    } else if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};

