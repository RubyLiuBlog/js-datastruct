import React from 'react'
import {Select} from 'antd'
import {cityDataTwo} from '../../util/city'
const {Option} =  Select
const citySelect = (props) => {
  // const [area, setArea] = useState('')
  // const [city,setCity] = useState('')
  const sheng = cityDataTwo['0']
  const shengChange = (value) =>{
    // setCity('0'+value)
    console.log(value)
  }
  return(
    <>
     <Select  style={{ width: 120 }} onChange={shengChange}>
        {Object.keys(sheng).forEach(key => {
          return( <Option value={key}>{sheng[key]}</Option>)
        })}
      </Select >
    </>
  )
}
export default citySelect