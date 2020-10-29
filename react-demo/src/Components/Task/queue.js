class Queue {
  constructor(que){
    this.que = que || []
  }
  push = (value) => {
    this.que.push(value)
  }
  shift = () => {
    this.que.shift()
  }
  getLength = () => {
    return this.que.length
  }
  getArray = () => {
    return this.que
  }
    // 获取队列第一位元素
  peek = () => {
    return this.que.length > 0 ? this.que[0] : null 
  }
}
export default new Queue()