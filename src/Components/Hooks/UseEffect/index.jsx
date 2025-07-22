import React, { useState } from 'react'
import { useEffect } from 'react'

const ReactUseEffect = () => {
    const[count ,setCount] = useState(0);

    useEffect(()=>{
        console.log("count" , count);
        
    } ,[count])

  return (
    <>
        <h1>Hello useEffect</h1>
        <div>
            <p>Count:{count}</p>
            <button className='px-4 py-2 bg-blue-600 ' onClick={()=>{setCount(count+1)}}>Increase</button>
        </div>
    </>
  )
}

export default ReactUseEffect