/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 * 1.先反转链表
 * 2.从低位进行计算
 * 时间复杂度O2n
 * 空间复杂度O1
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

    return pre

};

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

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 * 1.先反转链表
 * 2.从低位进行计算
 * 时间复杂度On
 * 空间复杂度O1
*/
var getDecimalValue = function(head) {

    let res = 0;
    while(head != null){
        res = res * 2 + head.val;
        head = head.next;
    }
    return res;

};