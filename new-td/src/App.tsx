import React, {useState} from 'react';
import './App.css';
import {TasksPropsType, Todolist} from "./Todolist";

export type FilterType = 'all' | 'active' | 'completed'


function App() {

    const title = "What to learn"

    const [tasks, setTasks] = useState<Array<TasksPropsType>>([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "NodeJS", isDone: false},
    ])

    const removeTask = (taskID: number) => {
        setTasks(tasks.filter(t => t.id !== taskID))
    }

    let [filter, setFilter] = useState<FilterType>('all')

    const filterTask = (buttonName: FilterType) => {
        setFilter(buttonName)
    }

    let filteredTasks = tasks
    if (filter === 'active') {
        filteredTasks = tasks.filter(task => !task.isDone)
    }
    if (filter === 'completed') {
        filteredTasks = tasks.filter(task => task.isDone)
    }

    return (
        <div className='App'>
            <Todolist
                title={title}
                tasks={filteredTasks}
                removeTask={removeTask}
                filterTask={filterTask}
            />
        </div>
    )
}

export default App