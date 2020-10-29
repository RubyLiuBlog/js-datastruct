const json = {
  a:{
    b: {
      c : 1
    }
  },
  d: [1,2]
}
const dfs = (n,path) => {
  console.log(n,path)
  Object.keys(n).forEach(k => {
    dfs(n[k],path.concat(k))
  })
}
// dfs(json,[])

// 深拷贝
const deepClone = (n) => {
  if(typeof n !== 'object'){
    return n
  }
  let result
  if(n instanceof Array){
    result = []
  }else{
    result = {}
  }
  for(let i in n){
    if(n.hasOwnProperty(i))
    result[i] = deepClone(n[i])
  }
  return result
}
console.log(JSON.stringify(deepClone(json)))
