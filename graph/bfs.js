const graph = require('./graph')
/**
 * 图的广度优先遍历
 * 1.新建一个队列，把根节点入队
 * 2.把队头出队并访问
 * 3.把队头的没访问过的相邻节点入队
 */
const visited = new Set()
const bfs = (n) => {
  const queue = [n]
  while(queue.length > 0 && n){
    const tmp = queue.shift()
    console.log(tmp)
    visited.add(tmp)
    graph[tmp].forEach(element => {
      if(!visited.has(element)){
        queue.push(element)
      }
    });
  }
}
bfs(2)