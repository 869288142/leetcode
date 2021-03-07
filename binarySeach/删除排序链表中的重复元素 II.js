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
 */
var deleteDuplicates = function(head) {
    // 处理head，方便删除节点
    let s = new ListNode(0)

    s.next = head

    let pre = s
    let cur = s
    let hashMap = new Map()

    // 对节点值计数
    let tmp = s.next
    while(tmp) {
        if(hashMap.has(tmp.val)) {
            hashMap.set(tmp.val, hashMap.get(tmp.val) + 1)
        }else {
            hashMap.set(tmp.val, 1)
        }
        tmp = tmp.next
    }
    // 根据map删除重复节点
    while(cur) {
        if(hashMap.get(cur.val)  > 1) {
            pre.next = cur.next
        }else {
            pre = cur
        }
        cur = cur.next
    }

    return s.next
};


var deleteDuplicates = function (head) {
    if(!head) return head
    var copy = new ListNode() // 创建一条头指针为空的链
    copy.next = head

    var cur = copy.next
    var prev = copy
    var flag = false

    while (cur.next) {
        if (cur.val == cur.next.val) {
            flag = true
        } else {
            if (flag) {
                prev.next = cur.next
                flag = false
            }
            else {
                prev = cur
            }
        }
        cur = cur.next
    }

    if(flag) prev.next = cur.next // 有可能一直遍历到末尾而未触发删除
    return copy.next
};