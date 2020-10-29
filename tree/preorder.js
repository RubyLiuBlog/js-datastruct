const bt = require('./bt')

/**
 * 先序遍历 
 * 1.访问根节点
 * 2.对根节点的左子树进行先序遍历
 * 3. 对根节点的右子树进行先序遍历
 */
// 递归版
const preOrder = (root) => {
  if(!root) { return  }
  console.log(root.val)
  preOrder(root.left)
  preOrder(root.right)
}
// 非递归版
const preOrder2 = (root) => {
  if(!root) { return  }
  const stack = [root]
  while(stack.length > 0 ){
    const n = stack.pop()
    console.log(n.val)
    if(n.right) stack.push(n.right)
    if(n.left) stack.push(n.left)
  }
}
// preOrder(bt)
// preOrder2(bt)



/**
 * 后序遍历
 * 1. 对根节点的左子树后续遍历
 * 2. 对根节点的右子树后续遍历
 * 3. 访问根节点
 */
const postOrder = (root) => {
  if(!root) return
  postOrder(root.left)
  postOrder(root.right)
  console.log(root.val)
}
