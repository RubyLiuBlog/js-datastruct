/**
 * 面试题一  简述instanceof 的原理 并用代码实现
 * 知识点1 如果A沿着原型链能找到B.prototype,那么A instanceof B 为true
 * 解法：遍历A的原型链，如果找到B.prototype,返回true，否则返回false
 * @param {*} A 
 * @param {*} B 
 */
const instanceOf = (A, B) => {
  let p = A
  while(p){
    if(p === B.prototype){
      return true
    }
    p = p.__proto__
  }
  return false
}
console.log(instanceOf(1,Array))

/**
 * 面试题二
 * 知识点2 如果在A上没有找到x属性，那么会沿着原型链去寻找x属性
 * foo 是对象 原型链为 {} -》 Object
 * F 是function 原型链为 F-> Function -> Object
 */
var foo = {},F=function(){}
Object.prototype.a = 'value a'
Function.prototype.b = 'value b'
console.log(foo.a) // 'value a'
console.log(foo.b) // undifined
console.log(F.a) // 'value a'
console.log(F.b) // 'value b'

/**
 * 知识点3
 * 前端与链表: 使用链表指针获取json的节点值
 */
const json = {
  a:{
    b: {
      c: 1
    }
  },
  d: {
    e: 2
  }
}
const path = ['a','b','c']
let p = json
path.forEach(k => {
  p = p[k]
})
console.log(p)