import React, { useReducer } from 'react'



const UseReducer = () => {

  const initial = {
    count: 0,
  };

  const reducer = (state,action)=>{
    console.log(state,action);
    
    switch(action.type){
    case "INCREMENT" : return {count:state.count + 1};  
    case "DECREMENT" : return {count:state.count - 1}; 
    case "RESET" : return {count:0}; 
  
    default : return state;
    }
  }

  const [state , dispatch] = useReducer(reducer , initial)
 console.log(state);
 

  return (
    
  <>
      <div className='flex flex-col gap-4 justify-center items-center'>
        <h1>UseReducer Hook</h1>
        <h1>{state.count}</h1>
        <button onClick={()=>dispatch({type:"INCREMENT"})}>Increase</button>
        <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrease</button>
        <button onClick={()=>dispatch({type:"RESET"})}>Reset</button>

      </div>
  </>
  )
}

export default UseReducer