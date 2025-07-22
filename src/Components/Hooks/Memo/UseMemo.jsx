import React, {  useMemo, useState } from 'react'

export const Expensive = ()=>{

const sum =()=>{
    let i = 0;
    for (i=0;i<=1000000000;i++)
    {
       i=i+1;
    }
    return i;
}

const total = useMemo(()=>{
    return sum(); 
},[])

// let total = sum();
 
return <>
    <p>Sum:{total}</p>
</>
}

export const UseMemo = () => {
    const [count , setCount] = useState(0);
  return (
    <>
        <div className='flex flex-col justify-center items-center'>
            <Expensive/>
            {/* <h1>Count : {count}</h1> */}
            <button onClick={()=>{setCount((e)=> e + 1)}}>Increase parent</button>
            <span> parent re-render {count}</span>
        </div>
    </>
  )
}
