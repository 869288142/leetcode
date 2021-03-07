/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 * 使用辅助空间记录是否有环
 * 时间复杂度On
 * 空间复杂度On
 */
var hasCycle = function(head) {
    let hashSet = new Set() 

    while(head) {
        if(hashSet.has(head)) {
            return true
        }else {
            hashSet.add(head)
        }
        head = head.next
    }
    
    return false

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
 * @return {boolean}
 * 通过快慢指针找相遇的可能
 * 时间复杂度On
 * 空间复杂度O1
 */
var hasCycle = function(head) {
    let slow = head
    let fast = head

    while(fast !== null  && fast.next !== null) {
        fast = fast.next.next
        slow = slow.next

        if(fast === slow) {
            return true
        }
    }

    return false;

};