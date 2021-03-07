/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 * 时间复杂度On
 * 空间复杂度O1
 */
var removeNthFromEnd = function(head, n) {
    let s = new ListNode(0)

    s.next = head

    let fast = s
    let low = s

    while(n-- >= 0) {
        fast = fast.next
    }

    while(fast !== null) {
        fast = fast.next
        low = low.next
    }

    low.next = low.next.next

    return s.next
};