import React, { useState } from 'react'

const Tailwind = () => {

    const [on ,setOn] = useState("dark")
    const handlebutton =()=>{
        
       setOn((e)=> (e === "dark"?"light":"dark"))
        document.body.style.backgroundColor = on ? "#fafafa" : "#16284a";
    }

  return (
    <>
        <div className={`flex flex-col h-lvh justify-center ${on === "dark"? "bg-blue-950":"bg-slate-400"} items-center`}>
            <h1 className={`${on === "dark"?"text-white":"text-black"}`}>Dark Mode Facility</h1>
            <button onClick={handlebutton} className='bg-blue-500 px-6 py-2 rounded-lg'>{on === "dark"?"Light":"Dark"}</button>
        </div>
    </>
  )
}

export default Tailwind