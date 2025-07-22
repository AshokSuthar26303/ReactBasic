import React, { memo, useRef } from 'react'

const Count = memo(({data}) => {
    const kese = useRef(0);
  return (
        <>
        <h1>Count Component</h1>
        <h1>{kese.current++}</h1>
        <span>My name is {data.name}</span>
        </>
  )
}
)
export default Count