import { createContext } from "react";

import runGeminiQuery from"../config/gemini.js";


export const Context=createContext();


const ContextProvider=(props)=>{


  const onSent=async(prompt)=>{
    runGeminiQuery(prompt)
  }
onSent("What is react js?")

  const contextvalue={

  }
  return (
    <Context.Provider value={contextvalue}>
    {props.children}
    </Context.Provider>
  )
}

export default ContextProvider
