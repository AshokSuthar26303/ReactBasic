import React from 'react'

export const EventHandling = () => {
    const handleevent=(event)=>{
        // console.log(event);
        // console.log(event.target);
        // console.log(event.target.type);
        
        alert("Button Clicked")
    }
  return (
    <div>
        <h1>Event Handling</h1>
        <button className='px-4 py-2 rounded-full bg-cyan-500 font-bold outline-none'  onClick={()=>handleevent()}>Click me</button>
    </div>
  )
}
