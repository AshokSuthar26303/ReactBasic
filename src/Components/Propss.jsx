import React from 'react'
import PropTypes from 'prop-types'

const Propss = (props) => {
  return (
   <div >
    <p>Name:{props.data}</p>
    <p>Age:{props.age}</p>
    <p>Age:{props.isStudent ? "yes":"no"}</p>
   </div>
  )
}
Propss.PropTypes={
data:PropTypes.string,
age:PropTypes.number,
isStudent:PropTypes.bool
}

Propss.DefaultProps={
data:"hii",
age:12,  
isStudent:false,
}
export default Propss
