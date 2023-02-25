import React, {useState} from 'react';
import './App.css';
import {TasksPropsType, Todolist} from "./Todolist";


function App() {

    const title = "What to learn"

    const [task, setTask] = useState<Array<TasksPropsType>>([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "NodeJS", isDone: false},
    ])

    const removeTask = (taskID: number) => {
        setTask(task.filter(t => t.id !== taskID))
    }

    return (
        <div className='App'>
            <Todolist
                title={title}
                tasks={task}
                removeTask={removeTask}
            />
        </div>
    )
}

export default App