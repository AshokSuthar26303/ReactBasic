import React, { useState } from 'react'

const NewUSeStateChall = () => {
    const [Count ,setCount] = useState(1)
    const [input, setInput]=useState(1)
  return (
   <>
        <h1>USeState Challange</h1>
        <p>Count:{Count}</p>
        <p>Step: <input type="number" value={input} onChange={(e)=>{setInput(Number(e.target.value))}}/></p>
        <div className='flex gap-6 mt-4'> 
            <button disabled={Count>=100} onClick={()=>{setCount(Count + input)}} className='px-4 py-2 bg-cyan-500 '>Increment</button>
            <button disabled={Count<=0} onClick={()=>{setCount(Count- input)}} className='px-4 py-2 bg-cyan-500 '>Decrement</button>
            <button onClick={()=>{setCount(0);setInput(0)}} className='px-4 py-2 bg-cyan-500 '>Reset</button>
        </div>
   </>
  )
}

export default NewUSeStateChall
