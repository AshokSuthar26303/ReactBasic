import React, { use, useEffect, useState } from 'react'

const Practice2 = () => {
    const [count ,setCount] = useState(0);
    const [input ,setINput] = useState("");
    useEffect(()=>{

        document.title = `count ${count}`;
        console.log(input);
        
    },[input,count])
    const handleinput =(e)=>{
        setINput(e.target.value)
    }
  return (  
   <>
    <div className='flex flex-col items-center justify-center'>
        <h2>UseEffect </h2>
        <p>Count: {count}</p>
        <button onClick={()=>setCount(count+1)} className='px-4 py-2 bg-blue-500 rounded-md'>Change</button>

        <div>
            <p>{input}</p>
           input: <input className='bg-gray-400' type="text" value={input} onChange={handleinput}  />
        </div>
    </div>
   </>
  )
}

export default Practice2