// 问题
// 1.给定两个有序链表，将其合并成一个有序链表

// 思路
// 参考合并有序数组
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var mergeTwoLists = function(l1, l2) {
  var mergedHead = { val: -1, next: null },
    crt = mergedHead
  while (l1 && l2) {
    if (l1.val > l2.val) {
      crt.next = l2
      l2 = l2.next
    } else {
      crt.next = l1
      l1 = l1.next
    }
    crt = crt.next
  }
  crt.next = l1 || l2

  return mergedHead.next
}

//

var mergeTwoLists = function(l1, l2) {
  if (l1 == null) return l2
  if (l2 == null) return l1
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }
}
