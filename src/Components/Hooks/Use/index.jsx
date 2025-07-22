import { createContext, use } from "react";



export const Real = createContext();

export const Realprovider = ({children})=>{
    const name = "Ashok Suthar"
    const Profession = "Student";
    return (
        <>
            <Real.Provider value={{name , Profession}}>{children}</Real.Provider>
        </>
    )

}


// here i create my custom hook 
export const NewHook = ()=>{
    const Create = use(Real);
    return Create;
}