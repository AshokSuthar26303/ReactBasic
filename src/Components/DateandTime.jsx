import React, { useState } from 'react'

const DateandTime = () => {
  const [getdate , setdate] = useState("");

  function getdate_Time(){
    const timedate = new Date();
    const Datee = timedate.toLocaleDateString();
    const Timee = timedate.toLocaleTimeString();
    setdate(`${Datee}-${Timee}`)
  }


  setTimeout(()=>{
    getdate_Time();
  },1000)


  return (
    <>
    <h1 className='text-center'>Real Date and Time</h1>
    <span>{getdate}</span>
    </>
  )
}

export default DateandTime
