import React, { useState } from 'react'

export const UseState = () => {
    const [count , setCount] = useState(0);
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1>{count}</h1>
        <button className='px-4 py-2 bg-red-500' onClick={()=>{setCount(count+1)}}>Click Changes</button>
    </div>
  )
}
