let mySet = new Set()
// 添加
mySet.add(1)
mySet.add(5)
mySet.add(5)
mySet.add('some text')
let o = {a:1}
mySet.add(o)
mySet.add({a:1})

// 查询
const has = mySet.has()
console.log(has)


