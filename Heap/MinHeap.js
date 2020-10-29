class MinHeap {
  constructor() {
    this.heap = []
  }
  swap (parentIndex,currentIndex){
    [this.heap[parentIndex],this.heap[currentIndex]] = [this.heap[currentIndex],this.heap[parentIndex]]
  }
  getParentIndex(i){
    return (i-1) >> 1
  }
  getLeftIndex(i){
    return i * 2 + 1
  }
  getRightIndex(i) {
    return i * 2 + 2
  }
  shiftUp(index){
    if(index === 0 ) {return}
    const parentIndex = this.getParentIndex(index)
    if(this.heap[parentIndex] >  this.heap[index]){
      this.swap(parentIndex,index)
      this.shiftUp(parentIndex)
    }
  }
  shiftDown(i){
    if(i > this.heap.length-1){
      return
    }
    const leftIndex = this.getLeftIndex(i)
    const rightIndex = this.getRightIndex(i)
    if(this.heap[i]> this.heap[leftIndex]){
      this.swap(i,leftIndex)
      this.shiftDown(leftIndex)
    }
    if(this.heap[i]> this.heap[rightIndex]){
      this.swap(i,rightIndex)
      this.shiftDown(rightIndex)
    }
  }
  insert (value) {
    this.heap.push(value)
    this.shiftUp(this.heap.length -1)
  }
  pop(){
    this.heap[0] = this.heap.pop()
    this.shiftDown(0)
  }
  peek () {
    return this.heap[0]
  }
  size() {
    return this.heap.length
  }
}
const h = new MinHeap()
h.insert(3)
h.insert(2)
h.insert(1)
// h.insert(0)
console.log(h.heap)