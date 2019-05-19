// 问题：给定一个链表，反转
//
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
 */
// 思路，将值逆序，而不是链表本身逆序
// var reverseList = function(head) {
//   let cur = head
//   let result = []
//   while(cur != null) {
//     result.unshift(cur.val)
//     cur = cur.next
//   }
//   cur = head
//   while(cur != null) {
//     cur.val = result.shift()
//     cur = cur.next
//   }
//   return  head
// };
// 思路 将单链表本身逆序
var reverseList = function(head) {
  let prev = null
  let curr = head
  while (curr != null) {
    // 将下一个节点保存
    let nextTemp = curr.next
    // 下一个节点设置为前一个节点
    curr.next = prev
    // 将上一个节点设置为当前节点
    prev = curr
    // 移动到下一个
    curr = nextTemp
  }
  return prev
}
