import React, {ChangeEvent, useState, MouseEvent, KeyboardEvent} from 'react';
import {FilterType} from "./App";


export type TodolistPropsType = {
    title: string
    tasks: Array<TasksPropsType>
    removeTask: (taskID: string) => void
    addTask: (taskTitle: string) => void
    //filterTask: (buttonName: FilterType) => void
}

export type TasksPropsType = {
    id: string
    title: string
    isDone: boolean
}

export const Todolist = (props: TodolistPropsType) => {

    let [filter, setFilter] = useState<FilterType>('all')

    const [taskTitle, setTaskTitle] = useState('')

    const filterTaskHandler = (buttonName: FilterType) => {
        setFilter(buttonName)
    }

    let filteredTasks = props.tasks
    if (filter === 'active') {
        filteredTasks = props.tasks.filter(task => !task.isDone)
    }
    if (filter === 'completed') {
        filteredTasks = props.tasks.filter(task => task.isDone)
    }

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTaskTitle(event.currentTarget.value)
    }

    const addTaskHandler = () => {
        props.addTask(taskTitle)
        setTaskTitle('')
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') { // регистр имеет значение ('enter' не работает)
            props.addTask(taskTitle)
            setTaskTitle('')
        }
    }

    const removeTaskHandler = (el: TasksPropsType) => {
        props.removeTask(el.id)
    }

    return (
        <div className="App">
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input value={taskTitle}
                           onChange={onChangeHandler}
                           onKeyDown={onKeyPressHandler}/>
                    <button onClick={addTaskHandler}>+</button>
                </div>
                <ul>
                    {filteredTasks.map((el) =>
                        <li key={el.id}>
                            <button onClick={() => removeTaskHandler(el)}>x</button>
                            <input type="checkbox" checked={el.isDone}/>
                            <span>{el.title}</span>
                        </li>)
                    }
                </ul>
                <div>
                    <button onClick={() => filterTaskHandler('all')}>All</button>
                    <button onClick={() => filterTaskHandler('active')}>Active</button>
                    <button onClick={() => filterTaskHandler('completed')}>Completed</button>
                </div>
            </div>
        </div>
    );
};
