import React, { useState } from 'react'

const Ab = () => {
    const[input,setInput] =useState('');
  return (
    <>
        <div className='mt-8'>
           input: <input className='border-2' type="text"  value={input} onChange={(e)=>{setInput(e.target.value)}} />
            <p>{input}</p>
        </div>
    </>
  )
}

export default Ab
