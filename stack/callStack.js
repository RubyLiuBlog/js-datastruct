// 函数调用堆栈
const func1 = () => {
  func2()
  console.log('this is func1')
}
const func2 = () => {
  func3()
  console.log('this is func2')
}
const func3 = () => {
  console.log('this is func3')
}
func1()