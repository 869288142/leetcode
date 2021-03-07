/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * 时间复杂度On
 * 空间复杂度On
 */
var removeDuplicateNodes = function(head) {
    // 通过Set辅助知道是否重复，同时使用双指针来方便删除
    let cur = head
    let pre  = head
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

var removeDuplicateNodes = function(head) {
    let ob = head

    while(ob) {
        let oc = ob
        while(oc.next) {
            if(oc.next.val === ob.val) {
                oc.next = oc.next.next
            }else {
                oc = oc.next
            }
          
        }
        ob = ob.next
    }

    return head
};