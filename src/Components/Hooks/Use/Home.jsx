import React, { use } from 'react'
import { NewHook, Real } from '.'

const Homee = () => {
    const {name , Profession} = NewHook();
  return (
        <>
            <h1>My name is {name} and My Profession is {Profession}</h1>
        </>
  )
}

export default Homee