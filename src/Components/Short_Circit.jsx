import React, { useState } from 'react'

const Short_Circit = () => {
    const [isLogin , setIslogin] = useState(true);
    const [user, setUser]=useState("")
  return (
   <>
    <section>
        <h1>Welcome to the short circuit</h1>

        {isLogin && <p>you are logged in</p>}
        
        {user ? `Hello ${user}` : "Please login ..!!"}

        <div className=' flex gap-7 mt-10'>
            <button onClick={()=> setIslogin(!isLogin)} className='px-4 py-2 bg-cyan-500'>Toggle login state</button>
            <button onClick={()=> setUser("Ashok Suthar")} className='px-4 py-2 bg-cyan-500'>Set user</button>
            <button onClick={()=> setUser("")} className='px-4 py-2 bg-cyan-500'>Clear user</button>
        </div>
    </section>
   </>
  )
}

export default Short_Circit
