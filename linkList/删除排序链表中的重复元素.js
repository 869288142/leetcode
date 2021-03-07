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
 * 利用hashSet来辅助记录重复值
 * 时间复杂度On
 * 空间复杂度On
 */
var deleteDuplicates = function(head) {
    let pre = head
    let cur = head
    let hashSet = new Set()

    while(cur) {
        if(hashSet.has(cur.val)) {
            pre.next = cur.next
        }else {
            pre = cur
            hashSet.add(cur.val)
        }
        cur = cur.next
    }

    return head
};

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
 * 发掘题目有序列表
 * 时间复杂度On
 * 空间复杂度O1
 */
var deleteDuplicates = function(head) {
    var cur = head;

    while(cur && cur.next) {
        if(cur.val == cur.next.val) {
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    }

    return head;
};