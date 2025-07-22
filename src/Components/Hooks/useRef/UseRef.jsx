import React, { useRef } from 'react'

const UseRef = () => {

  const user = useRef(null);
    const pass = useRef(null)
   
    // console.log(user);
    
    
    const handlesubmit=(e)=>{
      e.preventDefault();
      //  const user = document.getElementById("username");
      //   const pass = document.getElementById("password");
      console.log(user.current.value , pass.current.value);
   
  }

  return (
   <>
    <div>
      <h1 className='text-3xl text-center font-bold'>UseRef Hook</h1>
      <form onSubmit={handlesubmit} className='flex flex-col max-w-3xl mx-auto gap-4 mt-4 '>
        <input className='border'  type="text" id='username' ref={user}/>
        <input  className='border' type="password" id='password' ref={pass} />
        <button className='px-4 py-2 bg-blue-500' type='submit'>Submit</button>
      </form>
    </div>
   </>
  )
}

export default UseRef