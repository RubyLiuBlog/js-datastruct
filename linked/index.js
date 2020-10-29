// 链表
let a = {val: 'a'}
let b = {val: 'b'}
let c = {val: 'c'}
let d = {val: 'd'}
a.next = b
b.next = c
c.next = d

// 遍历链表
let p = a
while(p) {
  console.log(p.val)
  p = p.next
}
// 插入值
const e = {val: 'e'}
c.next = e
e.next = d
// 删除e节点
c.next = d
console.log(a)

