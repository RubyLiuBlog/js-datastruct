/**
 * 83. 删除排序链表中的重复元素
给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。

示例 1:

输入: 1->1->2
输出: 1->2
示例 2:

输入: 1->1->2->3->3
输出: 1->2->3
 */
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
var deleteDuplicates = function(head) {
  let p = head
  while(p && p.next) {
    if(  p.val === p.next.val){
      p.next = p.next.next
    } else {
      p = p.next
    }
    
  }
  return head
};

/**
 * 141.环形链表
*/

/**
 * 两个指针 一快一满，如果遍历结束两个指针能相逢，那么链表就有圈
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  let p1 = head // 慢指针
  let p2 = head // 快指针
  while(p1 && p2 && p2.next){
    p1 = p1.next
    p2 = p2.next.next
    if(p1 === p2){
      return true
    }
  }
  return false
};
/**
 * 234.回文链表
 * 示例 1:

输入: 1->2
输出: false
示例 2:

输入: 1->2->2->1
输出: true
 */
let a = {val: 0}
let b = {val: 2}
let c = {val: 2}
let d = {val: 1}
a.next = b 
b.next = c
c.next = d
var isPalindrome = function(head) {
  const stack = []
  let p = head
  let p2 = head
  while(p){
    stack.push(p.val)
    p = p.next
    
  }
  while(stack.length>0){
    const c = stack.pop()
    if(p2.val !== c){
      return false
    }
    p2 = p2.next
  }
  return true
};
console.log(isPalindrome(a))

