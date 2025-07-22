import React, { useState } from 'react'

const user = [
    {name:"Ashok Suthar" , age:20},
    {name:"Ravi Suthar" , age:20},
    {name:"Dheeraj Prajapati" , age:22},
    {name:"Kishor Suthar" , age:20},
]

const Practice1 = () => {
    const [userdetails,setuserdetails] = useState(user)
    const usecount = userdetails.length;
    const avg = userdetails.reduce((accum , ele)=> accum + ele.age,0 ) / usecount;
  return (
  <>
    <div className='flex flex-col justify-center items-center'>
        <h1 className='text-3xl'>User Details</h1>
        <ul className='list-none'>
          {userdetails.map((items,index)=>{
            return(
                <li key={index}>Name:{items.name} and age is:{items.age}</li>
            )
          })}
        </ul>
        <p>Total:{usecount}</p>
        <p>Total:{avg}</p>
    </div>
  </>
  )
}

export default Practice1
