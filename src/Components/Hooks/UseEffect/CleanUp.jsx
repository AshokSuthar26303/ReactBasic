import React, { use, useEffect, useState, useSyncExternalStore } from 'react'

const CleanUp = () => {
    const [count, setCount]=useState(0);

    useEffect(()=>{
       const timer = setInterval(()=>{
            setCount( count+1)
        },1000)

        return ()=> clearInterval(timer);    
    },[ count])

  return (
        <>
            <div className='text-center mt-60'>
                <p>My Subscribers on Youtube</p>
                <div>
                    {count}
                </div>
                <h3>Subscribers <br /> Real Time</h3>

            </div>
        </>
  )
}

export default CleanUp