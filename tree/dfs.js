const tree = {
  val : 'a',
  children: [
    {
      val : 'b',
      children: [
        {
          val : 'd',
          children: [
            
          ]
        },
        {
          val : 'e',
          children: [
            
          ]
        },
      ]
    },
    {
      val : 'c',
      children: [
        {
          val : 'f',
          children: [
            
          ]
        },{
          val : 'g',
          children: [
            
          ]
        },
      ]
    }
  ]
}
/**
 * 深度优先遍历口诀： 访问根节点，对根节点的children挨个进行深度优先遍历
 * @param {*} root 
 */
const dfs = (root) => {
  console.log(root.val)
  root.children.forEach(dfs);
}
// 1.新建一个队列，把根节点入队
// 2.把队头出队并访问
// 3.把队头的children 挨个入队
// 4.重复二三步，直到队列为空

const bfs = (root) => {
  const queue = [root]
  while(queue.length > 0){
    const n = queue.shift()
    console.log(n.val)
    n.children.forEach(item => {
      queue.push(item)
    })
  }
}
bfs(tree)