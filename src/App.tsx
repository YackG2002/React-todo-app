import React from "react";
import { UserContextProvider } from "./learning_Components/Box/UserContext";
import { User } from "./learning_Components/user";
import { ThemeContextProvider } from "./learning_Components/Box/ThemeContext";
import { Box } from "./learning_Components/Box/Box";

export default function App() {
   return(<>
      <div className="App">
         <ThemeContextProvider>
            <Box/>
         </ThemeContextProvider>
      </div>

      <div>
         <UserContextProvider>
            <User/>
         </UserContextProvider>
      </div>
   </>)

}