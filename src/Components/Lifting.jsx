import React, { useState } from 'react'

const Lifting = () => {
    const [inputvalue ,setinputvalue]=useState("");
  return (
  <>
    <InputComponent name={inputvalue} setname={setinputvalue}/>
    <DisplayComponents name={inputvalue}/>
  </>
  )
}

export default Lifting



const InputComponent =(props)=>{
    return( 
    <>
         <input type="text" placeholder='Enter the name ' value={props.name}  onChange={(e)=>{ props.setname(e.target.value)}}/>
    </>
)}


const DisplayComponents =(props)=>{
    return (
        <>
        <p>The input value is:{props.name} </p>
        </>
    )
}