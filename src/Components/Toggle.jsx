import React, { useState } from "react";


export const Toggle = () => {
    const handle=()=>{
        setopen(!isOpen);
    }
  const [isOpen, setopen] = useState(false);
  return (
    <>
      <div className="bg-black min-h-screen text-white ">
        <h1 className="text-center">hello toggle</h1>

        <div onClick={handle}>
                <button className='px-4 py-2 bg-green-500 rounded-lg'>{isOpen?("On"):("Off")}   </button>
        </div>
      </div>
    </>
  );
};

export default Toggle;

{
  /* <button >

</button> */
}
