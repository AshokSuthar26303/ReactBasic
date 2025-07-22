import React, { useState } from 'react'

const Uncontrolled_Controlled = () => {
    const [input ,setinput] = useState("");
    const handleForm =(e)=>{
            e.preventDefault();
            console.log(input);
            
// const data = document.getElementById("input").value
            // console.log(data);/
            
    }

    const handleinput =(e)=>[
        setinput(e.target.value)    
    ]
  return (
   <>
   <h1>Uncontrolled Componenets</h1>
           <form onSubmit={handleForm} >
            <label>Name: <input className='border-2 mt-2'  type="text" name="name" id='input' value={input}  onChange={handleinput}/></label> <br />
            <button className='px-4 py-2 bg-cyan-500 mt-2' type='submit'>Submit</button>
            <p>{input}</p>
            </form> 
   </>
  )
}

export default Uncontrolled_Controlled