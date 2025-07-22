import { createContext, use, useContext, useState } from "react";


export const ThemeLight = createContext(); 

export const Themeprovider = ({children})=>{

    const [light ,setLight] = useState("dark");

    const handleTheme =()=>{
        setLight((e)=> (e === "dark"?"light":"dark"))
    }
    
    return (
        <ThemeLight.Provider value={{light , handleTheme}}>{children}</ThemeLight.Provider>
    )

}

export const Darktheme =()=>{

        const {light , handleTheme} = use(ThemeLight);

    return(
        <>
        <div className={`${light === "dark"?"bg-black":"bg-white"} ${light === "dark" ? "text-white":"text-black"} gap-2 h-lvh flex flex-col justify-center items-center`}>
            <h1 className="font-bold" >Dark Theme Facility</h1>
            <p>Make your page Dark/Light</p>
            <button className="bg-blue-800 px-6 py-2 rounded-lg"  onClick={handleTheme}>{light === "dark" ? "switch light" :"switch dark"}</button>
        </div>
        </>
    )
}