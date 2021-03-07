交换链表中的节点/**
* Definition for singly-linked list.
* function ListNode(val, next) {
*     this.val = (val===undefined ? 0 : val)
*     this.next = (next===undefined ? null : next)
* }
*/
/**
* @param {ListNode} head
* @param {number} k
* @return {ListNode}
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    let fast = head
    let bottomK = head

    let topK = null
    // 正数第K个
    while(k-- > 1) {
        fast = fast.next
    }
    topK = fast

    fast = fast.next

    // 倒数第k个
    while(fast !== null) {
        fast = fast.next
        bottomK = bottomK.next
    }

    // 交换2个节点

    let tmp = topK.val
    topK.val = bottomK.val
    bottomK.val = tmp

    return head
};