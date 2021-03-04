/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
    let fast = head
    let low = head
    while(k-- > 0) {
        fast = fast.next
    }

    while(fast !== null) {
        fast = fast.next
        low = low.next
    }
    return low
};