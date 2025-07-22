import React from 'react'

const EventProps = () => {

    const HandleUser=(user)=>{
        alert(`Welcome ${user}`)
    }

    const handleHover=()=>{ 
        alert("welcome to the page when you hover on the text")
    }

  return (
   <>
   <WelcomeUser onClick={()=>{HandleUser("Ashok")}} onMouseEnter={handleHover} />
   </>
  )
}

export default EventProps


const WelcomeUser =(props)=>{
        return(<>
        <div className='flex flex-col gap-5'>
        <button  className="px-4 py-2 bg-orange-400 w-40" onClick={props.onClick}>click me</button>
        <button className="px-4 py-2 bg-orange-400 w-40"  onMouseEnter={props.onMouseEnter}>Hover me </button>
        <button className="px-4 py-2 bg-orange-400 w-40" onClick={props.onMouseEnter} >For greeting</button>
        </div>
        </>)
}