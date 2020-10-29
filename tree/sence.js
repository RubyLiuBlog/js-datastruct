/**
 * 104. 二叉树的最大深度
 * 给定一个二叉树，找出其最大深度。
 * @param {*} root 
 */
var maxDepth = function(root) {
  let result = 0
  const dfs = (n,l) => {
    if(!n) return
    result = Math.max(result,l)
    dfs(n.left,l+1)
    dfs(n.right,l+1)
  }
  dfs(root,1)
  return result
};