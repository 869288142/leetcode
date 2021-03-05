/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let cur = head
    let pre = null

    while(cur !== null) {

        let tmp = cur.next

        // 1. 当前下一节点链接到前一个节点
        cur.next = pre

        // 2.将此节点从列表中分离
        pre = cur

        // 3. 链接到下一个节点
        cur = tmp
    }
};