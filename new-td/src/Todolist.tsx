import React, {useState} from 'react';
import {FilterType} from "./App";

export type TodolistPropsType = {
    title: string
    tasks: Array<TasksPropsType>
    removeTask: (taskID: number) => void
    //filterTask: (buttonName: FilterType) => void
}

export type TasksPropsType = {
    id: number
    title: string
    isDone: boolean
}

export const Todolist = (props: TodolistPropsType) => {

    let [filter, setFilter] = useState<FilterType>('all')

    const filterTask = (buttonName: FilterType) => {
        setFilter(buttonName)
    }

    let filteredTasks = props.tasks
    if (filter === 'active') {
        filteredTasks = props.tasks.filter(task => !task.isDone)
    }
    if (filter === 'completed') {
        filteredTasks = props.tasks.filter(task => task.isDone)
    }

    return (
        <div className="App">
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    {filteredTasks.map((el) =>
                        <li key={el.id}>
                            <button onClick={() =>
                                props.removeTask(el.id)}>x
                            </button>
                            <input type="checkbox" checked={el.isDone}/>
                            <span>{el.title}</span>
                        </li>)
                    }
                </ul>
                <div>
                    <button onClick={() => filterTask('all')}>All</button>
                    <button onClick={() => filterTask('active')}>Active</button>
                    <button onClick={() => filterTask('completed')}>Completed</button>
                </div>
            </div>
        </div>
    );
};
