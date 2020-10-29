import React,{useState,useEffect} from 'react'
import deepClone from '../../util/deepClone'
const Task = (props) => {
  const [value, setValue] = useState('')
  const [taskList,setTaskList] = useState([])

  const inputChange = (v) => {
    setValue(v)
  }
  const addTask = () => {
      const tmp = taskList
      tmp.push({value})
      setTaskList(tmp)
      setValue('')
  }
  const finshTask = () => {
    const tmp = deepClone(taskList)
    tmp.shift()
    setTaskList(tmp)
  }
  return(
    <>
      <input value={value} onChange={(e) => inputChange(e.target.value)}/>
      <button onClick={addTask}>增加一条任务</button>
      <button onClick={finshTask}>完成一条任务</button>
      <ol>
        {taskList.length> 0 ? taskList.map((item,key) => {
          return( <li key={key}>{item.value}</li>)
        }) : null}
      </ol>
    </>
  )
}
export default Task