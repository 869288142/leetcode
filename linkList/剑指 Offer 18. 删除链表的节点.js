/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 * 单指针
 * 时间复杂度On
 * 空间复杂度O1
 * Edge Case ：第一个元素要单独判断
 */
var deleteNode = function(head, val) {

    if(head.val === val) {
        return head.next
    }

    let cur = head

    while(cur !== null) {
        if(cur.next.val === val) {
            cur = cur.next.next
            break;
        }
    }

    return cur
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 * 用指针记录前一个节点
 * 时间复杂度On
 * 空间复杂度O1
 */
var deleteNode = function(head, val) {
    let cur = head
    let pre = head
    
    // 1. 找到被删除的节点
    while(cur.val !== val) {
        if(cur.next === null) {
            return null
        }else {
            pre = cur
            cur = cur.next
        }
    }
    // 2. 判断是第一个节点还是其他节点进行删除
    if(cur === head) {
        head = head.next
    }else {
        pre.next = cur.next
    }
     
    return head
 };