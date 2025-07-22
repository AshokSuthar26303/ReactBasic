import React, { useState } from 'react'

const LoginReact = () => {
    const[user ,setUser] = useState({
        username:'',
        password:'',
    })

    const handleinput=(e)=>{
        const {name , value} =e.target
        setUser((prev)=>({ ... prev , [name]:value}))
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
            console.log(user);
            
    }

  return (
    <>
        <form className='max-w-3xl mx-auto bg-slate-500 p-5' onSubmit={handleSubmit}>
            <div className='flex flex-col gap-2'>
                <h1>Login</h1>

                <label htmlFor="username">Username:</label>
                <input type="text" name='username' required placeholder='enter ther username'  value={user.username} onChange={handleinput}/>
                
                <label htmlFor="password">Password:</label>
                <input type="password" name='password' required placeholder='********'  value={user.password} onChange={handleinput}/>
            
                <div>
                    <button className='mt-6 px-4 py-2 bg-blue-600'>Login</button>
                </div>    

            </div>
            <p>Hello {user.username} , Welcome to the login page</p>
        </form>
    </>
  )
}

export default LoginReact