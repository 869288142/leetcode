/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    
    let cur = list1 
    let count = 0
    let deleteS = null
    let deleteE = null

    while(cur !== null) {

        if(count === a - 1) {
            deleteS = cur
        }else if(count === b + 1) {
            deleteE = cur
        }
        count++
        cur = cur.next
    }
    let list2End = list2

    while(list2End.next !== null) {
        list2End = list2End.next
    }

    deleteS.next = list2
    
    list2End.next = deleteE


    return list1
};