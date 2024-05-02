import React, { createContext, useState } from 'react'

// 1-create context
export const registerContext = createContext()

export const deleteContext= createContext()


function ContextShare({children}) {

    const[registerdata,setRegisterdata]=useState("")

    // const[deletedata,setDeletedata]=useState("")

    return (
        <>
            <registerContext.Provider value={{registerdata,setRegisterdata}}>
                {children}
            </registerContext.Provider>

            {/* <deleteContext.Provider value={{deletedata,setDeletedata}}>
                {children}
            </deleteContext.Provider> */}
        </>
    )
}

export default ContextShare