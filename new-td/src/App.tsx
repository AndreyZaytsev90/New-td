import React, {useState} from 'react';
import './App.css';
import {TasksPropsType, Todolist} from "./Todolist";
import {v1} from "uuid";

export type FilterType = 'all' | 'active' | 'completed'


function App() {

    const title = "What to learn"

    const [tasks, setTasks] = useState<Array<TasksPropsType>>([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "NodeJS", isDone: false},
    ])

    const addTask = (taskTitle: string) => {
        let newTask = {id: v1(), title: taskTitle, isDone: false}
        setTasks([newTask, ...tasks])
    }

    const removeTask = (taskID: string) => {
        console.log(taskID)
        setTasks(tasks.filter(t => t.id !== taskID))
    }

    return (
        <div className='App'>
            <Todolist
                title={title}
                tasks={tasks}
                removeTask={removeTask}
                addTask={addTask}
                //filterTask={filterTask}
            />
        </div>
    )
}

export default App