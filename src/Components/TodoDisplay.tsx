import React from "react";
import { Todo } from "../interface";

interface props{
    task: Todo
    completeTask(taskToDelete: string): void
}

export const TodoDisplay = ({task, completeTask}: props) => {
    return(<>
        <div className="flex text-lg justify-between space-x-16 border-separate border">
            <span >{task.task}</span>
            <span >{task.deadLine}</span> Jour(s)
            <span >{task.badge}</span>
            <button onClick={() => completeTask(task.task)} className="border rounded-md p-3 border-slate-800 bg-teal-400">X</button>
        </div>
        
    </>)
}