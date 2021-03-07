/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 * 通过hashSet辅助记录节点
 * 时间复杂度Ol1+l2
 * 空间复杂度O unique l1 
 */
var getIntersectionNode = function(headA, headB) {
    let hashSet = new Set ()

    while(headA  !== null) {
        hashSet.add(headA)
        headA = headA.next
    }

    while( headB !== null) {
        if(hashSet.has(headB)) {
            return headB
        }
        headB = headB.next
    }

    return null
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 * 时间复杂度Ol1+l2
 * 空间复杂度O 1
 */
var getIntersectionNode = function(headA, headB) {
    let node1 = headA
    let node2 = headB

    while(node1 !== node2 ){
        node1 = node1 ? node1.next : headB
        node2 = node2 ? node2.next : headA
    }

    return node1
};