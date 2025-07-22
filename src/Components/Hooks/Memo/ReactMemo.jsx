import React, { useMemo, useState } from 'react'
import Count from './Count';

const ReactMemo = () => {     // when there is a parent component in this there are chil compo... then when the component is render then child will also so stop the rendering in the child component we use react memo.... and we can props in child component but we can't pass props as an array or obj..
  const [count , setCount ] = useState(0);


 // if we want to pass the props as an array or obj then we nee d to used useMemo instead of React.memo() here the exm...
 const Biodata = useMemo(()=>{
  return {
    name : "Ashok Suthar",
    Age : 20,
  }
 },[]) 


  // const color = ["Ashok" , "Ravi" ,"Kamlesh"]
// const name = "Ashok Suthar";
  return (
    <>
      <div>
        <h1>React Memo</h1>
        <h1>Count : {count}</h1>
        <button onClick={()=>{setCount((e)=>e + 1)}}>Increase</button>
        <Count data = {Biodata}/>
      </div>
    </>
  )
}

export default ReactMemo