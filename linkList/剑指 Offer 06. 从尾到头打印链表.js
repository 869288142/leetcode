/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 * 先反转链表再遍历
 * 时间复杂度O2n
 * 空间复杂度O1
 */
var reversePrint = function(head) {
    let cur = head
    let pre = null
    let ret = []

    while(cur !== null) {

        let tmp = cur.next

        // 1. 当前下一节点链接到前一个节点
        cur.next = pre

        // 2.将此节点从列表中分离
        pre = cur

        // 3. 链接到下一个节点
        cur = tmp
    }

    while(pre !== null) {
        ret.push(pre.val)
        pre = pre.next
    }

    return ret
};