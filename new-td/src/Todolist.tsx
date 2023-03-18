import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterType} from "./App";
import {Button} from "./components/Button";


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
        <div>
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input value={taskTitle}
                           onChange={onChangeHandler}
                           onKeyDown={onKeyPressHandler}/>
                    <Button name={'+'} callback={addTaskHandler}/>
                </div>
                <ul>
                    {filteredTasks.map((el) =>
                        <li key={el.id}>
                            <Button name={'x'} callback={() => removeTaskHandler(el)}/>
                            <input type="checkbox" checked={el.isDone}/>
                            <span>{el.title}</span>
                        </li>)
                    }
                </ul>
                <div>
                    <Button name={'All'} callback={() => filterTaskHandler('all')}/>
                    <Button name={'Active'} callback={() => filterTaskHandler("active")}/>
                    <Button name={'Completed'} callback={() => filterTaskHandler('completed')}/>
                </div>
            </div>
        </div>
    );
};
