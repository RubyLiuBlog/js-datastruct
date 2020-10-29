const graph = require('./graph')

/**
 * 图的深度优先遍历
 * 1.访问根节点
 * 2.访问所有未访问过的节点
 * 
 */
const visited = new Set()
const dfs = (n) => {
  console.log(n)
  visited.add(n)
  graph[n].forEach(element => {
    if(!visited.has(element)){
      dfs(element)
    }
  });
}
dfs(2)