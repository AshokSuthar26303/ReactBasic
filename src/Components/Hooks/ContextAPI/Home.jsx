import React, { useContext } from 'react'
import { BioContext, NewContext } from './Index'

const Home = () => {
    const {name , Age} = NewContext();  
  return (
    <>
        <h1>Hello Context API. My name is {name}. I am {Age} year old.</h1>
    </>
  )
}

export default Home