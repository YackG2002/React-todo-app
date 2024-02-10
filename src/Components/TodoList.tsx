import React, { ChangeEvent } from "react";
import { Todo } from "../interface";
import { useState } from "react";
import { TodoDisplay } from "./TodoDisplay";

export const TodoList =  () => {
    const [task, setTask] = useState("");
    const [deadLine, setDeadline] = useState (0);
    const [isComplete, setIscomplete] = useState(false);
    const [todolist, setTodoList] = useState<Todo[]>([])
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if(event.target.name === "task"){
            setTask(event.target.value);
        }
        else{
            setDeadline(Number(event.target.value))
        }
    }
    const verifyIsComplete = () => {
        isComplete ?setIscomplete(true): setIscomplete(false)
    }
    const addTask = () => {
        const newTask = {
            task: task,
            deadLine: deadLine,
            badge:isComplete
        }
        setTodoList([...todolist, newTask]);
        setTask("");
        setDeadline(0);
    }

    const completeTask= (taskToDelete: string) =>  {
        setTodoList(todolist.filter(task => {return task.task !== taskToDelete}))
    }

    return(<>
            <div className="ml-72 bg-red-400  font-normal w-2/5">
                {todolist.map((taskItem, index) => {
                    return <TodoDisplay key={index} task={taskItem} completeTask={completeTask}/>})}
            </div>
            <div className="flex items-center  space-x-4 place-content-around  rounded-md">

                <input type="text" placeholder="Add your task" name="task" value={task} onChange={handleChange} className="border rounded-lg h-8 border-slate-500"/>

                <input type="number" placeholder="Add Deadline (in day)" name="deadline" value={deadLine} onChange={handleChange} className="border rounded-lg h-8 border-slate-500 placeholder:text-center"/>

                <button type="submit" onClick={addTask} className="border rounded-md p-3 border-slate-800">ADD Task</button>

                <button onClick={verifyIsComplete} className="border rounded-md p-3 border-slate-800">Done</button>
            </div>
    </>)
}