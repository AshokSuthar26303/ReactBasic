import { useState } from 'react'
import Propss from './Components/Propss'
import { Looping } from './Components/Looping'
import { EventHandling } from './Components/EventHandling'
import EventProps from './Components/EventProps'
import Event_Propagation from './Components/Event_Propagation'
import { UseState } from './Components/UseState'
import Practice1 from './Components/Practice1'
import Lifting from './Components/Lifting'
import Toggle from './Components/Toggle'
import DateandTime from './Components/DateandTime'
import Short_Circit from './Components/Short_Circit'
import NewUSeStateChall from './Components/NewUSeStateChall'
import Ab from './Components/ab'
import Uncontrolled_Controlled from './Components/Uncontrolled&Controlled'
import RegistrationForm from './Components/RegistrationForm'
import RegstrationReact from './Components/RegistrationReact'
import Login from './Components/login'
import LoginReact from './Components/LoginReact'
import ContactForm from './Components/ContactForm'
import ReactUseEffect from './Components/Hooks/UseEffect'
import Practice2 from './Components/Hooks/UseEffect/Practice2'
import CleanUp from './Components/Hooks/UseEffect/CleanUp'
import Apinot from './Components/Hooks/UseEffect/Apinot'
import { ParentComponents } from './Components/PropsDrilling'
import { BioProvider } from './Components/Hooks/ContextAPI/Index'
import Home from './Components/Hooks/ContextAPI/Home'
import { Realprovider } from './Components/Hooks/Use'
import Homee from './Components/Hooks/Use/Home'
import { Darktheme, Themeprovider } from './Components/Hooks/ContextAPI/ToogleWithContext'
import UseReducer from './Components/Hooks/UseReducer/UseReducer'
import ReactMemo from './Components/Hooks/Memo/ReactMemo'
import { UseMemo } from './Components/Hooks/Memo/UseMemo'
import UseCallback from './Components/Hooks/Memo/UseCallback'
import Hello_redux from './Components/Redux/Hello_redux'
// import Tailwind from './Components/Tailwind'





function App() {

  return (
    <>
  
   {/* <BioProvider>
    <Home/>
   </BioProvider> */}



{/* 
  <Realprovider>
      <Homee/>
  </Realprovider> */}

  {/* <Tailwind/> */}

  {/* <Themeprovider>
    <Darktheme/>
  </Themeprovider> */}

{/* <UseReducer/> */}
{/* <ReactMemo/> */}

{/* <UseMemo/> */}
<Hello_redux/>
{/* <UseCallback/> */}
    </>
  )
}

export default App
