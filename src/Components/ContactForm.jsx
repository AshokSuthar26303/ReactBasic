import React, { useState } from 'react'

const ContactForm = () => {
    const [user , setUser] = useState({
        username:"",
        password:"",
        desc:"",
    })

const handledata=(e)=>{
    const {name,value} = e.target;
    setUser((prev)=>({ ... prev , [name]:value}))
}

const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(user);
}

  return (
  <>
    <div className='bg-black min-h-screen text-white text-center'>
        <div>
            <h1>Contact Form</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4 p-10 max-w-3xl mx-auto'>

                <label htmlFor="username">Username:</label>
                <input className='text-black p-1 rounded-md' type="text" name='username' required autoComplete='off' placeholder='username'  value={user.username} onChange={handledata}/>

                <label htmlFor="password">Password:</label>
                <input className='text-black p-1 rounded-md' type="password" name='password' placeholder='*******' required autoComplete='off'  value={user.password} onChange={handledata}/>
           
                <label htmlFor="desc">Message:</label>
                <textarea className='text-black p-1 rounded-md' name="desc" required autoComplete='off' placeholder='type here...' type="text" value={user.desc} onChange={handledata}></textarea>

                <div>
                    <button className='px-4 py-2 bg-blue-600 rounded-md'>Send Message</button>
                </div>    

            </form>
        </div>
    </div>
  </>
  )
}

export default ContactForm