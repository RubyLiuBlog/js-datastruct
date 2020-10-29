const bt = require('./bt')

/**
 * 中序遍历
 * 1. 对根节点的左子树进行中序遍历
 * 2. 访问根节点
 * 3. 对根节点的右子树进行中序遍历
 */
const inOrder = (root) => {
  if(!root) { return }
  inOrder(root.left)
  console.log(root.val)
  inOrder(root.right)
}

var inOrder2 = function(root) {
  if(!root) return
  const stack = []
  const result = []
  let p = root
  while(stack.length || p){
    while(p){
      stack.push(p)
      p = p.left
    }
    const n = stack.pop()
    result.push(n.val)
    p = n.right
  }
  return result
};
inOrder2(bt)