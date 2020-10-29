function quickSort(arr) {
  if(arr.length <= 1){
    return arr
  }
  let left = []
  let right = []
  let provit = arr.splice(arr.length >> 1 ,1)[0]
  for(let i in arr) {
    if(arr[i]<provit){
      left.push(arr[i])
    }else{
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([provit],quickSort(right))
}
console.log(quickSort([1,5,7,57,4,2,4]))