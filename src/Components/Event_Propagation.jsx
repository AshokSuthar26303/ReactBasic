import React from 'react'

const Event_Propagation = () => {

    const Grand_div=()=>{
        alert("hello grand div ")
    }
    const parent_div=()=>{
        alert("hello parent div ")
    }
    const child_div=(event)=>{
        event.stopPropagation()
        alert("hello child div ")
    }

  return (
    <div className='flex flex-col items-center justify-center p-9'>
      <div className="bg-red-400 w-60  text-center p-4 h-60" onClickCapture={Grand_div}> Grand div
        <div className="bg-green-300 w-40 text-center p-4 h-40" onClickCapture={parent_div}> parent div
            <button className="bg-slate-400 w-28  text-center p-4 h-28" onClick={child_div}>Child div</button>
        </div>
      </div>
    </div>
  )
}

export default Event_Propagation
