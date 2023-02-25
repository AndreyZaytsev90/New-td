import React from 'react';

export type TodolistPropsType = {
    title: string
    tasks: Array<TasksPropsType>
    removeTask: (taskID: number) => void
}

export type TasksPropsType = {
    id: number
    title: string
    isDone: boolean
}

export const Todolist = (props: TodolistPropsType) => {
    return (
        <div className="App">
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    {props.tasks.map((el) =>
                        <li key={el.id}>
                            <button onClick={() =>
                                props.removeTask(el.id)}>x</button>
                            <input type="checkbox" checked={el.isDone}/>
                            <span>{el.title}</span>
                        </li>)
                    }
                </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>
        </div>
    );
};
