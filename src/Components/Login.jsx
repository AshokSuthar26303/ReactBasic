import React, { useState } from 'react'

const Login = () => {
    const [username , setUsername]=useState("");
    const [password , setPassword]=useState("");

    const handlechange=(e)=>{
       const {name,value} = e.target;
       switch (name) {
        case "username":
            setUsername(value);
            break;
       
            case "password":
                setPassword(value);
                break;

        default:
            break;
       }
    }

    const handledata=(e)=>{
        e.preventDefault();
        const formdata = {
            username,password,
        }
        console.log(formdata);
        
    }

  return (
   <>
    <form className='bg-slate-400' onSubmit={handledata}>
        <div className='flex flex-col max-w-3xl  mx-auto '>
        <h1 className='text-center'>login</h1>

        <label htmlFor="username">Username:</label>
        <input type="text" placeholder='username' name="username" required value={username} onChange={handlechange}/>
        
        <label className='mt-4' htmlFor="password">Password:</label>
        <input type="password" name="password" required placeholder='*********' value={password} onChange={handlechange}/>
        
        <div>
            <button className='mt-6 bg-blue-600  px-4 py-2 rounded-lg'>Login</button>
        </div>

        </div>
    </form>
   </>
  )
}

export default Login ;