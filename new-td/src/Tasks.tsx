import React from 'react';


type TasksPropsType = {
    title: string
    tasks: Array<TaskType>
    students: Array<string>
}

type TaskType = {
    taskId: number
    title: string
    isDone: boolean
}
export const Tasks = (props: TasksPropsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>{props.tasks.map((el) => <li><input type="checkbox" checked={el.isDone}/>{el.title}</li>)}</div>
            <h5>{props.students.map((st)=> <div>{st}</div>)}</h5>
        </div>
    );
};
