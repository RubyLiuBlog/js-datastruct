const deepClone = (obj) => {
  if(typeof obj !== 'object'){
    return obj
  }
  let result
  if (obj instanceof Array) {
    result = []
  }else{
    result = {}
  }
  for(let key in obj){
    if(obj.hasOwnProperty(key)){
      result[key] = deepClone(obj[key])
    }
  }
  return result
}
export default deepClone