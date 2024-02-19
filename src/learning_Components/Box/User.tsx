import React from "react";
import { UserContext } from "./UserContext";
import { useContext } from "react";

export const User = () => {
    const userContext = useContext(UserContext)
    const handleLogin  = () => {
        if(userContext){
            userContext.setUser({
                name:'Yannick',
                email:'Yannick@example.com'
            })
        }
    }
    const handleLogout  = () => {
        if(userContext){
            userContext.setUser(null)
        }
    }
    return(<>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <div>User is : {userContext?.user?.name}</div>
        <div>email is : {userContext?.user?.email} </div>

    </>)
}