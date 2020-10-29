const shakeProof = (fn,deply,mode=true) => {
    let timeout
    return () => {
      if(timeout) clearTimeout(timeout)
      if(mode){
        let callNow = !timeout
        timeout = setTimeout(() => {
          timeout = null
        },deply)
        if(callNow){ fn.call(this)}
      }else{
        timeout = setTimeout(() => {
          timeout=null
          fn.call(this)
        },deply)
      }
    }
}
export default shakeProof