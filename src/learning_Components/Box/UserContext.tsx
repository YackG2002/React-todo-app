import React, { createContext, useState } from "react";

type AuthUser = {
    name: string,
    email: string
}

type UserContextProviderProps =  {
    children: React.ReactNode
}

type UserContextType = {
    user: null | AuthUser,
    setUser:  React.Dispatch<React.SetStateAction<AuthUser | null>>
}

export const UserContext = createContext<null | UserContextType>(null)

export const UserContextProvider = ({children}: UserContextProviderProps) => {
    const [user, setUser] = useState<AuthUser | null>(null)

 return(<>
    <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
 </>)   
}