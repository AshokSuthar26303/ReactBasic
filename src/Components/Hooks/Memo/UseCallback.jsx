import React, { memo, useCallback, useState } from 'react'

const UseCallback = () => {
    const [count ,setCount]  = useState(0);

    const increment = useCallback(()=> {console.log("increment inside");
     setCount((e)=> e + 1)},[])
    // const decrement = useCallback(()=> {console.log("decrement inside");
    //  setCount((e)=> e - 1)},[])

    const decrement = useCallback(()=> {console.log("decrement inside");
        setCount((e)=> e - 1)},[])

    // const decrement =()=> setCount((e)=> e - 1)

  return (
        <>
            <div className='flex flex-col justify-center items-center h-lvh bg-blue-950 gap-4 text-white'>
                <h1 className='text-3xl font-bold'>UseCallback Hook </h1>
                <h1 className='text-3xl font-bold'>Count : {count} </h1>
                <Button  onClick={increment}>Increase</Button>
                <Button  onClick={decrement}>Decrease</Button>
            </div>
        </>
  )
}

export default UseCallback


export const Button = memo(({onClick , children })=>{
    console.log(`rendering buttton ${children }`)
    return (
        <>
      
        <button  className="px-6 py-2 rounded-lg bg-blue-600" onClick={onClick}>{children}</button>
        </>
    )
})