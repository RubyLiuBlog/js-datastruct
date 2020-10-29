/**
 * leetcode 237. 删除链表中的节点
 * 请编写一个函数，使其可以删除某个链表中给定的（非末尾）节点。传入函数的唯一参数为 要被删除的节点 。
 * 输入：head = [4,5,1,9], node = 5
 * 输出：[4,1,9]
 * 解释：给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
  node.val = node.next.val
  node.next = node.next.next
};

/**
 * leetcode 206.反转链表
 * 反转一个单链表。
 * 示例:
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 * 进阶:
 * 你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
 * 链接：https://leetcode-cn.com/problems/reverse-linked-list
 */
let a = {val: 'a'}
let b = {val: 'b'}
let c = {val: 'c'}
let d = {val: 'd'}
let e = {val: 'e'}
let f = {val: null}
a.next = b
b.next = c
c.next = d
d.next = e
e.next = f
var reverseList = function(head) {
  // 创建两个指针 第一个指针指向头 第二个指针指向尾 依次交换两个指针的值
  let p1 = head
  let p2 = null
  while(p1){
    const tmp = p1.next
    p1.next = p2
    p2 = p1
    p1 = tmp
  }
  return p2
};
// reverseList(a)

/**
 * 两数相加
 * 给出两个 非空 的链表用来表示两个非负的整数其中，
 * 它们各自的位数是按照 逆序 的方式存储的，
 * 并且它们的每个节点只能存储 一位 数字。
 * 示例：输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出：7 -> 0 -> 8
 * 原因：342 + 465 = 807
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const l3 = new ListNode()
  let p1 = l1
  let p2 = l2 
  let p3 = l3
  let carry = 0
  while(p1 || p2){
    const v1 = p1 ? p1.val : 0
    const v2 = p2 ? p2.val : 0
    const val = v1 + v2 + carry
    carry = Math.floor(val/10)
    p3.next = new ListNode(val % 10)
    if(p1) p1 = p1.next
    if(p2) p2 = p2.next
    p3 = p3.next
  }
  if(carry){
    p3.next = new ListNode(carry)
  }
  return l3.next
};
