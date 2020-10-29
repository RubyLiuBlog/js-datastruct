// 十进制转二进制
function getBinary(num) {
  let result = []
  let str = ''
  while(num > 0){
    result.push(num % 2)
    num = Math.floor(num / 2)
  }
  const len = result.length
  for(let i =0; i< len; i+=1){
    str += result.pop()
  }
  return parseInt(str)
  
}
console.log(getBinary(37))
// leetcode 20.有效的括号
//给定一个只包括 '('，')'，
// '{'，'}'，'['，']' 的字符串，判断字符串是否有效。
function validBracket(str){
  if (str.length % 2 === 1 ){
    return false
  }
  let tmpArr = []
  for(let i in str){
    let c = str[i]
    if(c === '(' || c === '{' || c === '[' ){
      tmpArr.push(c)
    }
    else if (c === ')' || c === '}' || c === ']' ){
      const t = tmpArr[tmpArr.length-1]
      if(tmpArr.length === 0){
        return false
      }
      if((t === '(' && c === ')') ||
        (t === '{' && c === '}') ||
        (t === '[' && c === ']')
        )
      {
        tmpArr.pop()
      }
      else {
        return false
      }
    }
  }
  return stack.length === 0
}
console.log(validBracket('([)'))


