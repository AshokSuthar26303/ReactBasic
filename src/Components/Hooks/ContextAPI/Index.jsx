import { createContext, useContext } from "react";


export const BioContext = createContext();

export const BioProvider =({children})=>{
    const name = "Ashok Suthar"
    const Age = 30;
    return (
            <BioContext.Provider value={{name , Age}}>{children}

            </BioContext.Provider>
    )
}


// here i create my own or custome hooke

export const NewContext = ()=>{
    const context = useContext(BioContext);
    return context;
}