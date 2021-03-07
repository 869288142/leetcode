/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 * 找到倒数的节点
 * 由于不知道链表长度
 * 1. 遍历整个链表
 * 2. 记录每个节点对应的值
 * 3. 计算出倒数第k个节点的值
 * 时间复杂度On
 * 空间复杂度On
 */
var kthToLast = function(head, k) {
    let map = new Map()
    let index = 0
    while(head !== null) {
        map.set(index++, head.val)
        head = head.next
    }

    return map.get(index - k)
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
 * @param {number} k
 * @return {number}
 * 找到倒数的节点
 * 先使用一个指针走k步，
 * 再使用另外一个指针一起走，如果前面的指针到末尾，那么后面的指针就是结果
 */
var getKthFromEnd = function(head, k) {
    let fast = head
    let low = head
    while(k-- > 0) {
        fast = fast.next
    }

    while(fast !== null) {
        fast = fast.next
        low = low.next
    }
    return low
};