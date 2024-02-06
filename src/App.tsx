import React from "react";
import { TodoList} from "./Components/TodoList";

export default function App() {
   return(<>
   <div className="items-center justify-center text-center space-y-8 m-4">
        <h3 className="font-extrabold text-2xl shadow-lg p-2 text-center">TODO LIST ✓ </h3>
        <TodoList></TodoList>
   </div>
   </>)

}